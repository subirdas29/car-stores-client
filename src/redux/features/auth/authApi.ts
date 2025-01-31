import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
        signup:builder.mutation({
            query:(userRegister)=>({
                url:'/user/register',
                method:'Post',
                body:userRegister
            })
        }),
        login:builder.mutation({
            query:(userLogin) =>({
                url:'/auth/login',
                method:'POST',
                body:userLogin,
            })
        }),

        changePassword:builder.mutation({
            query:(data)=>({
                url:'/auth/change-password',
                method:'POST',
                body:data
            })
        })
        
    })
})

export const {useSignupMutation,useLoginMutation,useChangePasswordMutation} = authApi;