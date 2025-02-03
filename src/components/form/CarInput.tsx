import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const { TextArea } = Input;

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  rows?: number; 
  maxLength?: number; 
};

const CarInput = ({ type, name, label, placeholder, rows, maxLength }: TInputProps) => {
  const { control } = useFormContext(); 

  return (
    <Controller
      name={name}
      control={control} 
      rules={{ required: `${label || "This field"} is required` }} 
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          label={label}
          validateStatus={error ? "error" : ""} 
          help={error?.message}
        >
          {type === "textarea" ? (
            <TextArea {...field} style={{ fontSize: "16px", fontWeight: "normal" }}size="large" placeholder={placeholder} rows={rows} maxLength={maxLength} />
          ) : (
            <Input {...field} style={{ fontSize: "16px", fontWeight: "normal" }} size="large" type={type} placeholder={placeholder} />
          )}
        </Form.Item>
      )}
    />
  );
};

export default CarInput;
