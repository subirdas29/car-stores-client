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
        
    })
})

export const {useSignupMutation,useLoginMutation} = authApi;