import { Form, Input, Upload, Button } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
};

const uploadToCloudinary = async (file: File, onSuccess: (url: string) => void) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    console.log("Uploaded Image Data:", data); // Debugging

    if (data.secure_url) {
      onSuccess(data.secure_url);
    } else {
      console.error("Failed to get secure_url from Cloudinary response.");
    }
  } catch (error) {
    console.error("Image upload failed", error);
  }
};

const CarInput = ({ type, name, label, placeholder, rows, maxLength }: TInputProps) => {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: `${label || "This field"} is required` }}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label} validateStatus={error ? "error" : ""} help={error?.message}>
          {type === "textarea" ? (
            <TextArea {...field} style={{ fontSize: "16px", fontWeight: "normal" }} size="large" placeholder={placeholder} rows={rows} maxLength={maxLength} />
          ) : type === "file" ? (
            <>
              <Upload
                showUploadList={false}
                customRequest={({ file }) =>
                  uploadToCloudinary(file as File, (url) => {
                    console.log("Image URL:", url);
                    setValue("imageUrl", url, { shouldValidate: true });
                  })
                }
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
              {field.value && <img src={field.value} alt="Uploaded" width="100" />}
            </>
          ) : (
            <Input {...field} style={{ fontSize: "16px", fontWeight: "normal" }} size="large" type={type} placeholder={placeholder} />
          )}
        </Form.Item>
      )}
    />
  );
};

export default CarInput;
