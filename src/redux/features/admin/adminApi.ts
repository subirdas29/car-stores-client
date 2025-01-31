
import { TUser } from "../../../types/admin.types";
import { TQueryParam, TResponseRedux } from "../../../types/global";
import { TOrder } from "../../../types/users.types";

import { baseApi } from "../../api/baseApi";

const adminApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
       
        viewOrders: builder.query({
            query: (args) => {
              const params = new URLSearchParams();
      
              if (args) {
                args.forEach((item: TQueryParam) => {
                  params.append(item.name, item.value as string);
                });
              }
      
              return {
                url: '/orders',
                method: 'GET',
                params: params,
              };
            },
            transformResponse: (response: TResponseRedux<TOrder[]>) => {
              return {
                data: response.data,
                meta: response.meta,
              };
            },
            
          }),
        allUsers: builder.query({
            query: (args) => {
              const params = new URLSearchParams();
      
              if (args) {
                args.forEach((item: TQueryParam) => {
                  params.append(item.name, item.value as string);
                });
              }
      
              return {
                url: '/user/all-users',
                method: 'GET',
                params: params,
              };
            },
            transformResponse: (response: TResponseRedux<TUser[]>) => {
              console.log(response)
              return {
                data: response.data,
                meta: response.meta,
              };
            },
            
          }),

          createCar: builder.mutation({
            query: (data) => ({
              url: '/cars',
              method: 'POST',
              body: data,
            }),
          }),
    })
})

export const {useViewOrdersQuery,useCreateCarMutation,useAllUsersQuery} = adminApi;