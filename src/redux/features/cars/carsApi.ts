import { TQueryParam, TResponseRedux } from "../../../types/global";
import { TCar } from "../../../types/users.types";
import { baseApi } from "../../api/baseApi";

const carsApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
       
        cars: builder.query({
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
            transformResponse: (response: TResponseRedux<TCar>) => {
              return {
                data: response.data,
                meta: response.meta,
              };
            },
          }),
        
    })
})

export const {useCarsQuery,useGetACarQuery} = carsApi;