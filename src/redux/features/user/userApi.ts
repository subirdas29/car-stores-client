import { TQueryParam, TResponseRedux } from "../../../types/global";
import { TOrder } from "../../../types/users.types";

import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
        getMe:builder.query(
          {
            query:()=>(
              
            {
                url:'/user/me/details',
                method:'Get',
                // providesTags:['users']
            }
          ),
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
          providesTags: ["orders"],
          transformResponse: (response: TResponseRedux<TOrder[]>) => {
           
            return response;
          },
        }),

        profileUpdate: builder.mutation({
          query: (args) => ({
            url: `/user/profile-data`,
            method: 'PUT',
            body: args.data,
            
          }),
          // invalidatesTags:['users']
        }),
        
    })
})

export const {useGetMeQuery,useGetMyOrderQuery,useProfileUpdateMutation} = userApi;