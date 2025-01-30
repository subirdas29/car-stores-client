import { TQueryParam, TResponseRedux } from "../../../types/global";
import { TOrder } from "../../../types/users.types";

import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
        getMe:builder.query({
            query:()=>({
                url:'/user/me',
                method:'Get'
            })
        }),
        getMyOrder: builder.query({
          query: (args) => {
            const params = new URLSearchParams();
        
            if (args) {
              args.forEach((item: TQueryParam) => {
                params.append(item.name, item.value as string);
              });
            }
        
            return {
              url: "/user/my-order",
              method: "GET",
              params: params,
            };
          },
          providesTags: ["my-order"],
          transformResponse: (response: TResponseRedux<TOrder[]>) => {
            console.log("Transformed Response:", JSON.stringify(response, null, 2)); // Debug transformed response
            return response; // No need to alter, just return as-is
          },
        }),
        

          
        
        
    })
})

export const {useGetMeQuery,useGetMyOrderQuery} = userApi;