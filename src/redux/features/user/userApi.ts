import { TQueryParam, TResponseRedux } from "../../../types/global";
import { TOrder } from "../../../types/users.types";

import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
      getMe: builder.query({
        query: () => {
          console.log("Fetching user data...");
          return {
            url: "/user/me/details",
            method: "GET",
          };
        },
        providesTags: ["User"],
      }),
      
      
      profileUpdate: builder.mutation({
        query: (args) => ({
          url: `/user/profile-data`,
          method: "PATCH",
          body: args.data,
        }),
        invalidatesTags: ["User"], // ✅ Ensure tag name matches "providesTags"
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
              url: "/user/my-order/details",
              method: "GET",
              params: params,
              
            };
          },
          providesTags: ["orders"],
          transformResponse: (response: TResponseRedux<TOrder[]>) => {
           
            return response;
          },
        }),

      
        
        
    })
})

export const {useGetMeQuery,useGetMyOrderQuery,useProfileUpdateMutation} = userApi;