import { Form, Select } from "antd";
import { Controller } from "react-hook-form";


type TCarSelectProps = {
    label:string;
    name:string;
    options:{value:string; label:string; disabled?:boolean}[] | undefined
    disabled?:boolean,
    mode?: "multiple" | undefined
}

const CarSelect = ({label,name,options,disabled,mode}:TCarSelectProps) => {
  return (
   <Controller name={name} render = {({field, fieldState:{error}})=>(
    <Form.Item label={label}>
    <Select size="large" 
   
 style={{ width: "100%" }}
 {...field}
 options={options}
 mode={mode}
 disabled={disabled}
/>
{error && <small style={{color:'red'}}>{error.message}</small>}
</Form.Item>
   )} />
   
  )
}

export default CarSelect
