/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { ReactNode, useEffect } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const CarForm = ({ onSubmit, children, defaultValues, resolver }: TFormProps) => {
  // const formConfig: TFormConfig = {};

  // if (defaultValues) {
  //   formConfig["defaultValues"] = defaultValues;
  // }

  // if (resolver) {
  //   formConfig["resolver"] = resolver;
  // }

  // const methods = useForm(formConfig);

  const methods = useForm({defaultValues,resolver})

  useEffect(() => {
    if (defaultValues) {
      methods.reset(defaultValues);
    }
  }, [defaultValues, methods]);
  



  const submit: SubmitHandler<FieldValues> = (data) => {
  

    console.log("Final Form Data:", data); // Debugging before submission
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default CarForm;
