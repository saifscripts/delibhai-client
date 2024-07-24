import { baseApi } from "../../api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateUser: builder.mutation({
      query: (data) => ({
        url: "/user/",
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useUpdateUserMutation } = userApi;
