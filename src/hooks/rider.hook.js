import { useQuery } from "@tanstack/react-query";
import { getRiders } from "../services/rider.service";

export const useRiders = (searchParams) => {
  const result = useQuery({
    queryKey: ["RIDERS"],
    queryFn: async () => await getRiders(searchParams),
  });

  const riders = result?.data?.data;

  return { ...result, riders };
};
