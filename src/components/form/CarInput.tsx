import { Form, Input } from "antd"
import { Controller } from "react-hook-form"

type TInputProps = {
    type:string,
    name:string,
    label?:string,
   

}

const CarInput = ({type,name,label}:TInputProps) => {
   
  return (
    <div >
        
     <Controller
      name={name}
      render = {({field})=>(
       <Form.Item label={label}>
         <Input {...field}  size="large" type={type} id={name} />
       </Form.Item>
      )}
     />
    </div>
  )
}

export default CarInput
