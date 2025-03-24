
import { TCar } from "../../../types/admin.types";
import { TQueryParam, TResponseRedux } from "../../../types/global";


import { baseApi } from "../../api/baseApi";

const carApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
       
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
            providesTags:['Cars'],
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
            providesTags:['Cars'],
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
            invalidatesTags:['Cars']
          }),
          

          updateCars: builder.mutation({
            query: (args) => ({
              url: `/cars/${args.carId}`,
              method: 'PUT',
              body: args.data,
            }),
            invalidatesTags:['Cars']
          }),

          deleteCar: builder.mutation({
            query: (carId) => ({
              url: `/cars/delete/${carId}`,
              method: "PATCH",
            }),
            invalidatesTags: ['Cars'],
          }),   
    })
})

export const {useGetACarQuery,useDeleteCarMutation,useUpdateCarsMutation,useAllCarsQuery,useCreateCarMutation} = carApi;