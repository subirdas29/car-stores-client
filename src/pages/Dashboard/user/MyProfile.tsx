/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { Button } from "antd";
import CarForm from "../../../components/form/CarForm";
import CarInput from "../../../components/form/CarInput";
import { toast } from "sonner";

import { FieldValues } from "react-hook-form";
import { useGetMeQuery, useProfileUpdateMutation } from "../../../redux/features/user/userApi";

import UploadImage from "../../../components/form/UploadImage";
import { useAppSelector } from "../../../redux/hook";
import { useCurrentToken } from "../../../redux/features/auth/authSlice";
import { verifyToken } from "../../../utils/verifyToken";
import { TResponse } from "../../../types/global";
import { TUser } from "../../../types/admin.types";

const MyProfile = () => {
  const token = useAppSelector(useCurrentToken);

  const { data: userData, refetch,  isLoading, error} = useGetMeQuery(undefined,
    {
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true, 
    }
  );
  let user;
  if (token) {
    user = verifyToken(token);
  }

  const [profileUpdate] = useProfileUpdateMutation();

  const defaultValues = {
    name: userData?.data?.name || "",
    email: user?.email || "",
    phone: userData?.data?.phone || "",
    address: userData?.data?.address || "",
    city: userData?.data?.city || "",
  };


  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Loading...");
    try {
      const userInfo = { data };
      const res = await profileUpdate(userInfo) as TResponse<TUser>;
  
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success(`${data.name} profile updated successfully`, { id: toastId });
        refetch(); 
      }
    } catch (err: any) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  useEffect(() => {
    refetch(); 
  }, [userData]);


if (error) return <p>Error loading user data</p>;

  return (
    <div className="border-1 border-gray-200 shadow-lg rounded-md p-10">
      <CarForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <div className="grid grid-cols-2 gap-5 font-bold">
          <CarInput type="text" name="name" label="Name:" />
          <CarInput type="email" name="email" label="Email:" disabled />
          <CarInput type="text" name="phone" label="Phone:" />
          <CarInput type="text" name="city" label="City:" />
          <CarInput type="textarea" name="address" label="Address:" placeholder="Write your address..." rows={4} maxLength={500} />

          <div className="flex flex-col">
            <span className="mb-2">Image:</span>
            <UploadImage defaultImage={userData?.data?.imageUrl} />
          </div>
        </div>

        <Button htmlType="submit" disabled={isLoading}>
          {isLoading ? "Updating..." : "Update Profile"}
        </Button>
      </CarForm>
    </div>
  );
};

export default MyProfile;
