import { baseApi } from "../../api/baseApi";

export const riderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateRider: builder.mutation({
      query: (data) => ({
        url: "/rider/",
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useUpdateRiderMutation } = riderApi;
