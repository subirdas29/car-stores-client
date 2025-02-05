import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

const UploadImage = () => {
  const { control } = useFormContext();
  const [loading, setLoading] = useState(false); // Track loading state

  const uploadToCloudinary = async (file: File, onSuccess: (url: string) => void) => {
    setLoading(true); // Set loading to true when upload starts

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        { method: "POST", body: formData }
      );
      const data = await response.json();
      console.log("Uploaded Image Data:", data); // Check for response

      if (data.secure_url) {
        onSuccess(data.secure_url); // Update form field with image URL
        message.success("Image uploaded successfully! ✅");
      } else {
        message.error("Failed to upload image ❌");
      }
    } catch (error) {
      console.error("Image upload failed", error);
      message.error("Image upload failed ❌");
    } finally {
      setLoading(false); // Set loading to false when upload completes
    }
  };

  return (
    <Controller
      name="imageUrl"
      control={control}
      rules={{ required: "Image is required" }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <Upload
            showUploadList={false}
            customRequest={({ file }) => uploadToCloudinary(file as File, onChange)}
          >
            <Button
              icon={<UploadOutlined />}
              loading={loading} // Show loading spinner when uploading
              disabled={loading} 
            >
              {loading ? "Uploading..." : "Upload Image"} {/* Text updates based on loading state */}
            </Button>
          </Upload>

          {/* Display uploaded image if available */}
          {value && <img src={value} alt="Uploaded" width="100" style={{ marginTop: "10px" }} />}

          {/* Show error message if validation fails */}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </>
      )}
    />
  );
};

export default UploadImage;
