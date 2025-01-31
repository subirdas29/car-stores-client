import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

const { TextArea } = Input;

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  rows?: number; // For TextArea
  maxLength?: number; // For TextArea
};

const CarInput = ({ type, name, label, placeholder, rows, maxLength }: TInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field, fieldState:{error}}) => (
          <Form.Item label={label}>
            {type === "textarea" ? (
              <TextArea
                {...field}
                style={{ fontSize: "16px", fontWeight: "normal" }}
                size="large"
                placeholder={placeholder}
                rows={rows}
                maxLength={maxLength}
              />
            ) : (
              <Input
                {...field}
                style={{ fontSize: "16px", fontWeight: "normal" }}
                size="large"
                type={type}
                id={name}
                placeholder={placeholder}
              />
            )}
            {error && <small style={{color:'red'}}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CarInput;
