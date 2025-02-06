import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface UploadImageProps {
  defaultImage?: string; // Accept default image prop
}

const UploadImage = ({ defaultImage }: UploadImageProps) => {
  const { control } = useFormContext();
  const [preview, setPreview] = useState(defaultImage || ""); // Use default image if available
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPreview(defaultImage || "");
  }, [defaultImage]);

  const uploadToCloudinary = async (file: File, onSuccess: (url: string) => void) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        { method: "POST", body: formData }
      );
      const data = await response.json();

      if (data.secure_url) {
        onSuccess(data.secure_url);
        setPreview(data.secure_url); // Update preview on upload success
        message.success("Image uploaded successfully! ✅");
      } else {
        message.error("Failed to upload image ❌");
      }
    } catch (error) {
      console.error("Image upload failed", error);
      message.error("Image upload failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Controller
      name="imageUrl"
      control={control}
      rules={{
        required: !defaultImage ? "Image is required" : false, // Only required if no default image
      }}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <>
          {/* Display default image or uploaded image */}
          {preview && <img src={preview} alt="Profile" width="100" className="mb-2 rounded-md" />}

          <Upload
            showUploadList={false}
            customRequest={({ file }) => uploadToCloudinary(file as File, onChange)}
          >
            <Button icon={<UploadOutlined />} loading={loading} disabled={loading}>
              {loading ? "Uploading..." : "Upload Image"}
            </Button>
          </Upload>

          {/* Show error only if no default image and user hasn't uploaded one */}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </>
      )}
    />
  );
};

export default UploadImage;
