import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import jwtDecode from 'jwt-decode';
import { BACKEND_URL } from '../../constant/backend-domain';
import { ICategory } from '../../types/category.type';
import { ICertificate } from '../../types/certificate';
import { ICourse } from '../../types/course.type';
import { ILesson, ISection } from '../../types/lesson.type';
import { IOrder } from '../../types/order.type';
import { IParams } from '../../types/params.type';
import { IUser } from '../../types/user.type';
import { ICoupon } from '../../types/coupon.type';
import { Provider } from 'react-redux';

import { CustomError } from '../../utils/helpers';

interface getCategoriesResponse {
  categories: ICategory[];
  message: string;
}

export interface getCoursesResponse {
  courses: ICourse[];
  message: string;
  pagination: {
    _limit: number;
    _totalRows: number;
    _page: number;
  };
}

export interface getPopularCoursesResponse {
  courses: ICourse[];
  pagination: {
    _limit: number;
    _totalRows: number;
    _page: number;
  };
  message: string;
}

export interface getRetrieveCartResponse {
  cart: {
    items: ICourseDetail[];
    totalPrice: number;
    coupon?: ICoupon;
  };
  message: string;
}

export interface getAuthorsResponse {
  message: string;
  authors: [
    string,
    {
      name: string;
      _id: string;
    }
  ][];
}

export interface getSectionsResponse {
  sections: ISection[];
  message: string;
}

export interface getLessonsResponse {
  lessons: ILesson[];
  message: string;
}

export interface getCourseResponse {
  course: ICourse;
  message: string;
}

export interface ICourseEnrolledByUser extends ICourse {
  progress: number;
  totalVideosLengthDone: number;
  isBought: boolean;
  lessons: ILesson[];
  lessonsDone: string[];
  sections: ISection[];
}

export interface getCourseEnrolledByUserResponse {
  course: ICourseEnrolledByUser;
  message: string;
}

export interface ICourseDetail extends ICourse {
  lessons: number;
  sections: number;
  numOfReviews: number;
  totalVideosLength: number;
  avgRatingStars: number;
  students: number;
  isBought: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface getCourseDetailResponse {
  course: ICourseDetail;
  message: string;
}

export interface createOrderResponse {
  order: IOrder;
  message: string;
}

export interface getUserResponse {
  user: IUser;
  message: string;
}

export interface IUserDetail extends IUser {
  courses: ICourseEnrolledByUser[];
}

export interface getUserDetailResponse {
  user: IUserDetail;
  message: string;
}

export interface certificateRequest {
  courseId: string;
  userId: string;
  completionDate: string;
}

export interface createCertificateResponse {
  message: string;
  certificate: ICertificate;
}

export interface getCertificateResponse {
  certificate: ICertificate;
  message: string;
}

export interface GetCouponsValidForCoursesResponse {
  message: string;
  coupons: ICoupon[] | null;
  maxDiscountCoupon: ICoupon | null;
}

export interface GetTotalPriceResponse {
  message: string;
  totalPrice: number;
  discountPrice: number;
}

export const clientApi = createApi({
  reducerPath: 'clientApi', 
  keepUnusedDataFor: 10, 
  tagTypes: ['Coupons', 'Clients'], 
  baseQuery: fetchBaseQuery({
    baseUrl: `${BACKEND_URL}`,
    prepareHeaders(headers) {
      headers.set('authorization', 'Bearer ABCXYZ');

      const token = localStorage.getItem('token');

      if (token) {
        const decodedToken: { exp: number; iat: number; userId: string; email: string } = jwtDecode(token);

        headers.set('UserId', decodedToken.userId);
      }

      // Add the userId header

      // Set some headers here !
      return headers;
    }
  }),
  endpoints: (build) => ({
    getCategories: build.query<getCategoriesResponse, void>({
      query: () => '/categories', // method không có argument
     
      providesTags(result) {
       
        if (Array.isArray(result) && result.map) {
          if (result) {
            const final = [
              ...result.map(({ _id }: { _id: string }) => ({ type: 'Clients' as const, _id })),
              { type: 'Clients' as const, id: 'LIST' }
            ];
            console.log('final: ', final);

            return final;
          }
        }

        // const final = [{ type: 'Orders' as const, id: 'LIST' }]
        // return final
        return [{ type: 'Clients', id: 'LIST' }];
      }
    }),
    getCourses: build.query<getCoursesResponse, IParams>({
      query: (params) => ({
        url: '/courses',
        params: params
      }), // method không có argument
     
      providesTags(result) {
       
        if (Array.isArray(result) && result.map) {
          if (result) {
            const final = [
              ...result.map(({ _id }: { _id: string }) => ({ type: 'Clients' as const, _id })),
              { type: 'Clients' as const, id: 'LIST' }
            ];
            console.log('final: ', final);

            return final;
          }
        }

       
        return [{ type: 'Clients', id: 'LIST' }];
      }
    }),
    getPopularCourses: build.query<getPopularCoursesResponse, IParams>({
      query: (params) => ({
        url: '/courses/popular',
        params: params
      }), //
     providesTags(result) {
       
        if (Array.isArray(result) && result.map) {
          if (result) {
            const final = [
              ...result.map(({ _id }: { _id: string }) => ({ type: 'Clients' as const, _id })),
              { type: 'Clients' as const, id: 'LIST' }
            ];
            console.log('final: ', final);

            return final;
          }
        }

        // const final = [{ type: 'Orders' as const, id: 'LIST' }]
        // return final
        return [{ type: 'Clients', id: 'LIST' }];
      }
    }),

    getAuthors: build.query<getAuthorsResponse, void>({
      query: () => ({
        url: '/authors'
      }), // method không có argument
      
      providesTags(result) {
       

        if (Array.isArray(result) && result.map) {
          if (result) {
            const final = [
              ...result.map(({ _id }: { _id: string }) => ({ type: 'Clients' as const, _id })),
              { type: 'Clients' as const, id: 'LIST' }
            ];
            console.log('final: ', final);

            return final;
          }
        }

        // const final = [{ type: 'Orders' as const, id: 'LIST' }]
        // return final
        return [{ type: 'Clients', id: 'LIST' }];
      }
    }),
    getCoursesOrderedByUser: build.query<getCoursesResponse, IParams>({
      query: (params) => ({
        url: `/courses/${params._userId as string}/ordered`,
        params: {
          _limit: params._limit,
          _page: params._page
        }
      }), // method không có argument
      
      providesTags(result) {
       

        if (Array.isArray(result) && result.map) {
          if (result) {
            const final = [
              ...result.map(({ _id }: { _id: string }) => ({ type: 'Clients' as const, _id })),
              { type: 'Clients' as const, id: 'LIST' }
            ];
            console.log('final: ', final);

            return final;
          }
        }

        // const final = [{ type: 'Orders' as const, id: 'LIST' }]
        // return final
        return [{ type: 'Clients', id: 'LIST' }];
      }
    }),
    getUserDetail: build.query<getUserDetailResponse, IParams>({
      query: (params) => ({
        url: `/users/${params._userId as string}/detail`,
        params: {
          _limit: params._limit,
          _page: params._page
        }
      }), // method không có argument
      
      providesTags(result) {
       

        if (Array.isArray(result) && result.map) {
          if (result) {
            const final = [
              ...result.map(({ _id }: { _id: string }) => ({ type: 'Clients' as const, _id })),
              { type: 'Clients' as const, id: 'LIST' }
            ];
            console.log('final: ', final);

            return final;
          }
        }

        // const final = [{ type: 'Orders' as const, id: 'LIST' }]
        // return final
        return [{ type: 'Clients', id: 'LIST' }];
      }
    }),
    
    getRetrieveCart: build.query<getRetrieveCartResponse, { courseIds: string[] }>({
      query: (params) => ({
        url: `/cart/retrieve`,
        params: {
          _courseIds: params.courseIds
        }
      }), // method không có argument
     
      providesTags(result) {
       

        if (Array.isArray(result) && result.map) {
          if (result) {
            const final = [
              ...result.map(({ _id }: { _id: string }) => ({ type: 'Clients' as const, _id })),
              { type: 'Clients' as const, id: 'LIST' }
            ];
            console.log('final: ', final);

            return final;
          }
        }

        // const final = [{ type: 'Orders' as const, id: 'LIST' }]
        // return final
        return [{ type: 'Clients', id: 'LIST' }];
      }
    }),
    createOrder: build.mutation<createOrderResponse, Omit<IOrder, '_id'>>({
      query(body) {
        try {
          // throw Error('hehehehe')
          // let a: any = null
          // a.b = 1
          return {
            url: 'order',
            method: 'POST',
            body
          };
        } catch (error: any) {
          throw new CustomError((error as CustomError).message);
        }
      },
     
      invalidatesTags: (result, error, body) => (error ? [] : [{ type: 'Clients', id: 'LIST' }])
    }),
    updateLessonDoneByUser: build.mutation<createOrderResponse, { userId: string; lessonId: string }>({
      query(body) {
        try {
          // throw Error('hehehehe')
          // let a: any = null
          // a.b = 1
          return {
            url: `lesson-done/${body.lessonId}`,
            method: 'POST',
            body: {
              userId: body.userId
            }
          };
        } catch (error: any) {
          throw new CustomError((error as CustomError).message);
        }
      }
      
      // invalidatesTags: (result, error, body) => (error ? [] : [{ type: 'Clients', id: 'LIST' }])
    }),
    getCategory: build.query<ICategory, string>({
      query: (id) => ({
        url: `categories/${id}`,
        headers: {
          hello: 'Im Sang'
        }
      })
    }),
    getCourse: build.query<getCourseResponse, string>({
      query: (id) => ({
        url: `courses/${id}`
      })
    }),
    getCourseEnrolledByUser: build.query<getCourseEnrolledByUserResponse, string>({
      query: (id) => ({
        url: `courses/${id}/enrolled`
        // headers: {
        //   hello: 'Im Sang'
        // }
      }),
      providesTags(result) {
       

        if (Array.isArray(result) && result.map) {
          if (result) {
            const final = [
              ...result.map(({ _id }: { _id: string }) => ({ type: 'Clients' as const, _id })),
              { type: 'Clients' as const, id: 'LIST' }
            ];
            console.log('final: ', final);

            return final;
          }
        }

        // const final = [{ type: 'Orders' as const, id: 'LIST' }]
        // return final
        return [{ type: 'Clients', id: 'LIST' }];
      }
    }),
    getCourseDetail: build.query<getCourseDetailResponse, { courseId: string; userId: string }>({
      query: (params) => {
        return {
          url: `courses/${params.courseId}/detail?userId=${params.userId}`
        };
      }
    }),
    getSectionsByCourseId: build.query<getSectionsResponse, string>({
      query: (courseId) => ({
        url: `sections/${courseId}/course`
        // headers: {
        //   userId: 'Im Sang'
        // }
      })
    }),
    getCertificate: build.query<getCertificateResponse, { courseId: string; userId: string }>({
      query: (params) => ({
        url: `get-certificate`,
        params: params
      })
    }),
    createCertificate: build.mutation<createCertificateResponse, certificateRequest>({
      query(body) {
        try {
          // throw Error('hehehehe')
          // let a: any = null
          // a.b = 1
          return {
            url: `generate-certificate`,
            method: 'POST',
            body: body
          };
        } catch (error: any) {
          throw new CustomError((error as CustomError).message);
        }
      },
     
      invalidatesTags: (result, error, body) => (error ? [] : [{ type: 'Clients', id: 'LIST' }])
    }),

    getLessonsBySectionId: build.query<getLessonsResponse, { sectionId: string; userId: string }>({
      query: (payload) => ({
        url: `lessons/${payload.sectionId}/section`,
        headers: {
          userId: payload.userId
        }
      })
    }),
    getLessonsBySectionIdEnrolledCourse: build.query<getLessonsResponse, { sectionId: string; userId: string }>({
      query: (payload) => ({
        url: `lessons/${payload.sectionId}/section/course-enrolled`,
        headers: {
          userId: payload.userId
        }
      })
    }),
    getUser: build.query<getUserResponse, string>({
      query: (id) => ({
        url: `users/${id}`
        // headers: {
        //   hello: 'Im Sang'
        // }
      })
    }),
    getCouponsValidForCourses: build.query<GetCouponsValidForCoursesResponse, string>({
      query: (courseIds) => ({
        url: `coupons/valid-for-courses?courseIds=${courseIds}`
      }),
      providesTags: [{ type: 'Coupons', id: 'LIST' }]
    }),
    getTotalPrice: build.query<GetTotalPriceResponse, { courseIds: string; couponCode?: string }>({
      query: ({ courseIds, couponCode }) => ({
        url: `carts/get-total-price`,
        params: { courseIds, couponCode }
      }),
      providesTags: [{ type: 'Clients', id: 'LIST' }]
    }),
    getValidCouponsForCoursesWithoutUser: build.query<GetCouponsValidForCoursesResponse, string>({
      query: (courseIds) => ({
        url: `coupons/valid-for-courses-without-user?courseIds=${courseIds}`
      }),
      providesTags: [{ type: 'Coupons', id: 'LIST' }]
    }),
    getTotalPriceWithoutUser: build.query<GetTotalPriceResponse, { courseIds: string; couponCode?: string }>({
      query: ({ courseIds, couponCode }) => ({
        url: `carts/get-total-price-without-user`,
        params: { courseIds, couponCode }
      }),
      providesTags: [{ type: 'Clients', id: 'LIST' }]
    }),
  })
});

export const {
  useGetCategoriesQuery,
  useGetCoursesQuery,
  useGetPopularCoursesQuery,
  useGetAuthorsQuery,
  useGetCourseEnrolledByUserQuery,
  useGetCoursesOrderedByUserQuery,
  useGetSectionsByCourseIdQuery,
  useGetLessonsBySectionIdQuery,
  useGetLessonsBySectionIdEnrolledCourseQuery,
  useGetUserQuery,
  useGetUserDetailQuery,
  useGetCourseQuery,
  useGetCourseDetailQuery,
  useCreateOrderMutation,
  useUpdateLessonDoneByUserMutation,
  useGetRetrieveCartQuery,
  useGetCertificateQuery,
  useCreateCertificateMutation,
  useGetCouponsValidForCoursesQuery,
  useGetTotalPriceQuery,
  useGetValidCouponsForCoursesWithoutUserQuery,
  useGetTotalPriceWithoutUserQuery,
} = clientApi;
