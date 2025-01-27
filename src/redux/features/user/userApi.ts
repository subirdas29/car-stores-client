import { TQueryParam, TResponseRedux } from "../../../types/global";
import { TTableData } from "../../../types/users.types";
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
                url: '/user/my-order',
                method: 'GET',
                params: params,
              };
            },
            transformResponse: (response: TResponseRedux<TTableData[]>) => {
              return {
                data: response.data,
                meta: response.meta,
              };
            },
            
          }),

          
        
        
    })
})

export const {useGetMeQuery,useGetMyOrderQuery} = userApi;