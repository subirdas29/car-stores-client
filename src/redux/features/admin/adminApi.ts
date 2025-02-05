
import { TCar, TUser } from "../../../types/admin.types";
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
        providesTags: ['orders'],
        transformResponse: (response: TResponseRedux<TOrder[]>) => {
          return {
            data: response.data,
            meta: response.meta,
          };
        },

        
      }),

      deleteOrder: builder.mutation({
        query: (orderId) => ({
          url: `/orders/${orderId}`,
          method: "DELETE",
        }),
        invalidatesTags: ['orders'],  
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
             providesTags: ['allusers'],
            transformResponse: (response: TResponseRedux<TUser[]>) => {
              console.log(response)
              return {
                data: response.data,
                meta: response.meta,
              };
            },
            
          }),

          getAUser: builder.query({
            query: (userId) => {
              return {
                url: `/user/${userId}`,
                method: 'GET',
              };
            },
            providesTags:['allusers'],
            transformResponse: (response: TResponseRedux<TUser>) => {
              return {
                data: response.data,
                meta: response.meta,
              };
            },
          }),

          blockedUser: builder.mutation({
            query: (userId) => ({
              url: `/user/block-user/${userId}`,
              method: 'PATCH',
              
            }),
            invalidatesTags: ['allusers'],
          }),
          
          unblockedUser: builder.mutation({
            query: (userId) => ({
              url: `/user/unblock-user/${userId}`,
              method: 'PATCH',
               
            }),
            invalidatesTags: ['allusers'],
          }),

      

          allCars: builder.query({
            query: (args) => {
              const params = new URLSearchParams();
      
              if (args) {
                args.forEach((item: TQueryParam) => {
                  params.append(item.name, item.value as string);
                });
              }
              
              return {
                url: '/cars',
                method: 'GET',
                params: params,
              };
            },
            providesTags:['cars'],
            transformResponse: (response: TResponseRedux<TCar[]>) => {
              return {
                data: response.data,
                meta: response.meta,
              };
            },
            
          }),
          
          

          getACar: builder.query({
            query: (_id) => {
              return {
                url: `/cars/${_id}`,
                method: 'GET',
              };
            },
            // providesTags:['cars'],
            transformResponse: (response: TResponseRedux<TCar>) => {
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
            invalidatesTags:['cars']
          }),
          

          updateCars: builder.mutation({
            query: (args) => ({
              url: `/cars/${args.carId}`,
              method: 'PUT',
              body: args.data,
            }),
            invalidatesTags:['cars']
          }),
          deleteCar: builder.mutation({
            query: (carId) => ({
              url: `/cars/delete/${carId}`,
              method: "PATCH",
            }),
            // invalidatesTags: ['cars'],
          }), 
    
         
    })
})

export const {useGetACarQuery,useBlockedUserMutation,useUnblockedUserMutation,useDeleteOrderMutation,
  useDeleteCarMutation
  ,useViewOrdersQuery,useCreateCarMutation,useAllUsersQuery,useUpdateCarsMutation,useGetAUserQuery,useAllCarsQuery} = adminApi;