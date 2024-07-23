import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, setUser } from "../features/auth/authSlice";
import getNewToken from "./getNewToken";

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_BASE_URL2}/api/v1`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken = async (args, api, options) => {
  let result = await baseQuery(args, api, options);

  if (result?.error?.status === 401) {
    const token = await getNewToken();
    if (!token) api.dispatch(logout());

    const user = api.getState().auth.user;

    api.dispatch(setUser({ user, token }));

    result = await baseQuery(args, api, options);
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
