import { TQueryParam, TResponseRedux } from "../../../types/global";
import { TOrder } from "../../../types/users.types";
import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (userInfo) => ({
        url: "/orders",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags:['Orders']
    }),

  

    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/orders/verify",
        params: { order_id },
        method: "GET",
      }),
      providesTags:['Orders']
    }),

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
          providesTags: ['Orders'],
          transformResponse: (response: TResponseRedux<TOrder[]>) => {
            return {
              data: response.data,
              meta: response.meta,
            };
          },
  
          
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
          providesTags: ["Orders"],
          transformResponse: (response: TResponseRedux<TOrder[]>) => {
           
            return response;
          },
        }),
        
        deleteOrder: builder.mutation({
          query: ({ orderId, carIdToDelete }: { orderId: string; carIdToDelete: string }) => ({
            url: `/orders/${orderId}/${carIdToDelete}`,
            method: "DELETE",
          }),
          invalidatesTags: ['Orders'],  
        }), 
    
  }),
});

export const {
  useCreateOrderMutation,
  useVerifyOrderQuery,
  useDeleteOrderMutation,useViewOrdersQuery,useGetMyOrderQuery,
} = orderApi;