// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { BACKEND_URL } from '../../../constant/backend-domain';
// import { ICoupon } from '../../../types/coupon.type';
// import { CustomError } from '../../../utils/helpers';

// interface getCouponsResponse {
//   coupons: ICoupon[];
//   message: string;
// }

// interface getCouponResponse {
//   coupon: ICoupon;
//   message: string;
// }

// export const couponApi = createApi({
//   reducerPath: 'couponApi',
//   tagTypes: ['Coupons'],
//   keepUnusedDataFor: 10,
//   baseQuery: fetchBaseQuery({
//     baseUrl: `${BACKEND_URL}/admin`,
//     prepareHeaders(headers) {
//       const adminToken = localStorage.getItem('adminToken');
//       if (adminToken) {
//         headers.set('authorization', `Bearer ${adminToken}`);
//       }
//       return headers;
//     }
//   }),
//   endpoints: (build) => ({
//     getAllCoupons: build.query<getCouponsResponse, void>({
//       query: () => ({
//         url: '/all-coupons'
//       }),
//       providesTags: (result) => [{ type: 'Coupons', id: 'LIST' }]
//     }),
//     getCoupons: build.query<getCouponsResponse, { params: any }>({
//         query: (params) => ({
//           url: '/coupons',
//           params
//         }),
//         providesTags: (result) => {
//             if (result?.coupons) {
//               return [
//                 ...result.coupons.map(coupon => ({ type: 'Coupons', _id: coupon._id as string })),
//                 { type: 'Coupons', id: 'LIST' } as const
//               ];
//             }
//             return [{ type: 'Coupons', id: 'LIST' }] as const;
//           }
          
          
//       }),

    

//     addCoupon: build.mutation<{ coupon: ICoupon; message: string }, Omit<ICoupon, '_id'>>({
//       query: (body) => ({
//         url: '/coupon',
//         method: 'POST',
//         body
//       }),
//       invalidatesTags: [{ type: 'Coupons', id: 'LIST' }]
//     }),
//     getCoupon: build.query<getCouponResponse, string>({
//       query: (id) => ({
//         url: `/coupons/${id}/single`
//       })
//     }),
//     updateCoupon: build.mutation<ICoupon, ICoupon>({
//       query: (data) => ({
//         url: `/coupon/${data._id}`,
//         method: 'PUT',
//         body: data
//       }),
//       invalidatesTags: (result, error, data) => [{ type: 'Coupons', id: 'LIST' }]
//     }),
//     deleteCoupon: build.mutation<Record<string, never>, string>({
//       query: (id) => ({
//         url: `/coupons/${id}`,
//         method: 'DELETE'
//       }),
//       invalidatesTags: (result, error, id) => [{ type: 'Coupons', id: 'LIST' }]
//     })
//   })
// });

// export const {
//   useGetCouponsQuery,
//   useGetAllCouponsQuery,
//   useAddCouponMutation,
//   useGetCouponQuery,
//   useUpdateCouponMutation,
//   useDeleteCouponMutation
// } = couponApi;








import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_URL } from '../../../constant/backend-domain';
import { ICoupon } from '../../../types/coupon.type';
import { IParams } from '../../../types/params.type';

// Define response interfaces
interface GetCouponsResponse {
  coupons: ICoupon[];
  message: string;
  total: number;
  page: number;
  pages: number;
  limit: number;
}

interface GetCouponResponse {
  coupon: ICoupon;
  message: string;
}

interface GetCouponHistoriesResponse {
  message: string;
  count: number;
  page: number;
  pages: number;
  limit: number;
}

interface UpdateActiveStatusCouponResponse {
  message: string;
}

interface DeleteCouponResponse {
  message: string;
}

interface AddCouponResponse {
  coupon: ICoupon;
  message: string;
}

export const couponApi = createApi({
  reducerPath: 'couponApi',
  tagTypes: ['Coupons'],
  keepUnusedDataFor: 10,
  baseQuery: fetchBaseQuery({
    baseUrl: `${BACKEND_URL}/admin/coupon`,
    prepareHeaders(headers) {
      const adminToken = localStorage.getItem('adminToken');
      if (adminToken) {
        headers.set('authorization', `Bearer ${adminToken}`);
      }
      return headers;
    }
  }),
  endpoints: (build) => ({
    getCoupons: build.query<GetCouponsResponse, IParams>({
      query: () => ({
        url: '/coupons',
        // params: params
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.coupons.map(({ _id }) => ({ type: 'Coupons' as const, id: _id })),
              { type: 'Coupons' as const, id: 'LIST' },
            ]
          : [{ type: 'Coupons', id: 'LIST' }],
    }),

    // getCoupons: build.query<GetCouponsResponse, IParams>({
    //   query: (params) => ({
    //     url: '/coupons', // adjust this to match your API endpoint
    //     params: params
    //   }),
    //   providesTags: (result) =>
    //     result
    //       ? [
    //           ...result.coupons.map(({ _id }) => ({ type: 'Coupons' as const, id: _id })),
    //           { type: 'Coupons' as const, id: 'LIST' },
    //         ]
    //       : [{ type: 'Coupons', id: 'LIST' }],
    // }),
    
    getAllCoupons: build.query<GetCouponsResponse, void>({
      query: () => ({
        url: '/coupons'
      }),
      providesTags: [{ type: 'Coupons', id: 'LIST' }]
    }),
    getCouponById: build.query<GetCouponResponse, string>({
      query: (id) => ({
        url: `coupon/${id}`
      }),
      providesTags: (result, error, id) => [{ type: 'Coupons', id }]
    }),
    getCouponHistories: build.query<GetCouponHistoriesResponse, { couponId: string; params: IParams }>({
      query: ({ couponId, params }) => ({
        url: `coupon/histories/${couponId}`,
        params: params
      }),
      providesTags: (result, error, { couponId }) => [
        { type: 'Coupons', id: 'LIST' },
        { type: 'Coupons', id: couponId }
      ]
    }),
    postCoupon: build.mutation<void, ICoupon>({
      query: (coupon) => ({
        url: 'coupon',
        method: 'POST',
        body: coupon
      }),
      invalidatesTags: [{ type: 'Coupons', id: 'LIST' }]
    }),
    updateCoupon: build.mutation<void, ICoupon>({
      query: (coupon) => ({
        url: 'coupon/update',
        method: 'PUT',
        body: coupon
      }),
      invalidatesTags: (_, __, { _id }) => [
        { type: 'Coupons', id: 'LIST' },
        { type: 'Coupons', id: _id }
      ]
    }),
    deleteCoupon: build.mutation<DeleteCouponResponse, string>({
      query: (id) => ({
        url: `coupon/delete/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: (_, __, id) => [
        { type: 'Coupons', id: 'LIST' },
        { type: 'Coupons', id }
      ]
    }),
    addCoupon: build.mutation<AddCouponResponse, Omit<ICoupon, '_id'>>({
      query: (body) => ({
        url: 'coupon',
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'Coupons', id: 'LIST' }]
    })
  })
});

export const {
  useGetCouponsQuery,
  useGetAllCouponsQuery,
  useAddCouponMutation,
  useGetCouponByIdQuery,
  useGetCouponHistoriesQuery,
  useUpdateCouponMutation,
  useDeleteCouponMutation,
  usePostCouponMutation
} = couponApi;
