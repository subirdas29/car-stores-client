/* eslint-disable @typescript-eslint/no-explicit-any */

import {
    BaseQueryApi,
    BaseQueryFn,
    DefinitionType,
    FetchArgs,
    createApi,
    fetchBaseQuery,
  } from '@reduxjs/toolkit/query/react';
  

import { toast } from 'sonner';
import { logOut, setUser } from '../features/auth/authSlice';
import { RootState } from '../store';

  
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://car-stores-api.vercel.app/',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => { 
      const token = (getState() as RootState).auth.token;
   
  
      if (token) {
        headers.set('authorization', `${token}`);
      }
      return headers;
    },
  });
  
  const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs,
    BaseQueryApi,
    DefinitionType
  > = async (args, api, extraOptions): Promise<any> => {
    let result = await baseQuery(args, api, extraOptions);
  
    if (result?.error?.status === 404 || result?.error?.status === 403) {
      
      const errorData = result.error.data as { message?: string };
  
      
      const errorMessage = errorData.message || 'An unexpected error occurred.';
  
      toast.error(errorMessage);
    }

    if (result?.error?.status === 401) {
    
  
      const res = await fetch('https://car-stores-api.vercel.app/api/auth/refresh-token', {
        method: 'POST',
        credentials: 'include'
      });
  
      const data = await res.json();

  
      if (data?.data?.accessToken) {
        const user = (api.getState() as RootState).auth.user;
  
        api.dispatch(
          setUser({
            user,
            token: data.data.accessToken,
          })
        );

  
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logOut());
      }
    }
  
    return result;
  };
  
  export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    tagTypes:['cars','users','orders','allusers'],
    endpoints: () => ({}),
  });