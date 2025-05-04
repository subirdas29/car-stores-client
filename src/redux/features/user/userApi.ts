

import { TQueryParam, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";
import { TUser } from "../../../types/admin.types";

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
        invalidatesTags: ["User"], 
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
         providesTags: ['User'],
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
        providesTags:['User'],
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
        invalidatesTags: ['User'],
      }),
      
      unblockedUser: builder.mutation({
        query: (userId) => ({
          url: `/user/unblock-user/${userId}`,
          method: 'PATCH',
           
        }),
        invalidatesTags: ['User'],
      }),

      createContact: builder.mutation({
        query: (contactInfo) => ({
          url: "/contact",
          method: "POST",
          body: contactInfo,
        }),
        invalidatesTags:['Contacts']
      }),
      createSubscribe: builder.mutation({
        query: (subscribeInfo) => ({
          url: "/subscribe",
          method: "POST",
          body: subscribeInfo,
        }),
        invalidatesTags:['Subscribes']
      }),
  
        
    })
})

export const {useGetMeQuery,useProfileUpdateMutation,useBlockedUserMutation,useUnblockedUserMutation,useAllUsersQuery,useGetAUserQuery, useCreateContactMutation,useCreateSubscribeMutation} = userApi;