import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const coursesApi = createApi({
    reducerPath: 'coursesApi',
    tagTypes:['Products'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints:(build) =>({
        getCourses: build.query({
            query:(limit ='')=>`courses?${limit && `_limit=${limit}`}`,
            providesTags: (result)=> result
                ?[
                    ...result.map(({id})=>({type: 'Products', id})),
                    {type:'Products', id: 'LIST'}
                ]
                :[{type:'Products', id: 'LIST'}],
        }),
        addProduct: build.mutation({
            query: (body) => ({
                url:'courses',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type:'Products', id:'LIST'}]
        }),
        deleteProduct: build.mutation({
            query:(id)=>({
                url:`courses/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags:[{type: 'Products', id:'LIST'}]
        }),
        getModules: build.query({
            query:(limit ='')=>`modules?${limit && `_limit=${limit}`}`,
            providesTags: (result)=> result
                ?[
                    ...result.map(({id})=>({type: 'Products', id})),
                    {type:'Products', id: 'LIST'}
                ]
                :[{type:'Products', id: 'LIST'}],
        }),
    })
})

export const {useGetCoursesQuery, useAddProductMutation, useDeleteProductMutation, useGetModulesQuery} = coursesApi