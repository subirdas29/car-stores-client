import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

type ProfileAvatarProps = {
  imageUrl?: string; // Optional image URL
  size?: number; // Dynamic size prop
};

const ProfileAvatar = ({ imageUrl, size = 100 }: ProfileAvatarProps) => {
  return (
    <Avatar
      src={imageUrl || undefined} // Show image if available, otherwise default avatar
      icon={!imageUrl ? <UserOutlined style={{ color: "#1890ff" }} /> : undefined}
      style={{
        borderColor: "#1890ff",
        borderWidth: "2px",
        borderStyle: "solid",
        backgroundColor: "#e6f7ff",
        cursor: "pointer",
      }}
      size={size} // Dynamic size adjustment
    />
  );
};

export default ProfileAvatar;
