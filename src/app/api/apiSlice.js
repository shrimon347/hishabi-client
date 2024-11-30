import { getLocalStorage } from "@/utils/storage";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "http://localhost:8080/api/v1"; // process.env.REACT_APP_API_BASE_URL ||

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = getLocalStorage("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  })(args, api, extraOptions);

  // if (result?.error?.status === 401) {
  //   const refreshToken = getLocalStorage("refreshToken");
  //   if (refreshToken) {
  //     // Attempt to refresh the token
  //     const refreshResult = await fetchBaseQuery({
  //       baseUrl: API_BASE_URL,
  //     })(
  //       {
  //         url: "/refresh-token",
  //         method: "POST",
  //         body: { refreshToken },
  //       },
  //       api,
  //       extraOptions
  //     );

  //     if (refreshResult?.data) {
  //       const {
  //         token,
  //         refreshToken: newRefreshToken,
  //         user,
  //       } = refreshResult.data;
  //       setLocalStorage("token", token);
  //       setLocalStorage("refreshToken", newRefreshToken);
  //       api.dispatch(
  //         setUser({ user, jwt: token, refreshToken: newRefreshToken })
  //       );

  //       // Retry the original request with the new token
  //       result = await fetchBaseQuery({
  //         baseUrl: API_BASE_URL,
  //         prepareHeaders: (headers) => {
  //           headers.set("Authorization", `Bearer ${token}`);
  //           return headers;
  //         },
  //       })(args, api, extraOptions);
  //     } else {
  //       api.dispatch(logOut());
  //     }
  //   } else {
  //     api.dispatch(logOut());
  //   }
  // }

  return result;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getProfile: builder.query({
      query: () => "/profile",
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetProfileQuery } =
  authApi;
