import { httpsClient } from "@/http";
import { useQuery } from "@tanstack/react-query";

export interface IAdvantages {
  id: string;
  main_title: string;
  second_title: string;
  description: string;
  img: string;
}

export const useAdvantages = () => {
  return useQuery<IAdvantages[]>({
    queryKey: ["/advantages/"],
    queryFn: async () => {
      try {
        const response = await httpsClient.get("main/advantages/");
        if (response && response.data) {
          return response.data;
        } else {
          throw new Error("Response data is undefined");
        }
      } catch (error) {
        throw new Error("Error fetching banners: " );
      }
    },
  });
};