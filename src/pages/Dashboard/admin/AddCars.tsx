import { Button, Col, Form, Input, Row, Upload } from "antd";
import CarForm from "../../../components/form/CarForm";
import CarInput from "../../../components/form/CarInput";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Controller, FieldValues } from "react-hook-form";
import { useCreateCarMutation } from "../../../redux/features/admin/adminApi";
import { TResponse } from "../../../types/global";
import { carCategoryOptions } from "../../../constants/global";
import CarSelect from "../../../components/form/CarSelect";
import TextArea from "antd/es/input/TextArea";
import { UploadOutlined } from "@ant-design/icons";

const AddCars = () => {
 

  const [createCar] = useCreateCarMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");

    const carInfo = {
      brand: data.brand,
      model: data.model,
      category: data.category,
      price: Number(data.price),
      stock: Number(data.stock),
      imageUrl: data.imageUrl,
      description: data.description,
    };

    console.log(carInfo);

    const formData = new FormData();

    formData.append("data", JSON.stringify(carInfo));

    formData.append("file", data.image);

    try {
      const res = (await createCar(formData)) as TResponse<any>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
        console.log(res);
      } else {
        toast.success("Car created", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <div className="border-1 border-gray-200 shadow-lg rounded-md p-10">
      <h1 className="text-center text-2xl font-bold mt-2 mb-6">Add Cars</h1>
      <CarForm
        onSubmit={onSubmit}
       
      >
        <div className="grid grid-cols-2 gap-5 font-bold">
          <CarInput type="text" name="brand" label="Brand Name:" />

          <CarInput type="text" name="model" label="Model:" />
          <CarSelect
            name="category"
            label="Category"
            options={carCategoryOptions}
          />

<Controller
  name="image"
  render={({ field: { onChange, value, ...field } }) => (
    <Form.Item label="Picture">
      <Upload
        beforeUpload={() => false} 
        maxCount={1} 
        accept="image/*" 
        showUploadList={false} 
        onChange={({ file }) => onChange(file)}
      >
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      {value && <p style={{ marginTop: 5 }}>{value.name}</p>} {/* Show selected file name */}
    </Form.Item>
  )}
/>

          <CarInput type="text" name="price" label="Price:" />
          <CarInput type="text" name="stock" label="Stock:" />
          <CarInput
            type="textarea"
            name="description"
            label="Description:"
            placeholder="Write car details..."
            rows={4}
            maxLength={500}
          />
        </div>

        <Button htmlType="submit">Add</Button>
      </CarForm>
    </div>
  );
};

export default AddCars;
