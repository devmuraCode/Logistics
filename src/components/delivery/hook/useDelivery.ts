import { httpsClient } from "@/http";
import { useQuery } from "@tanstack/react-query";

export interface IChina {
  id: string;
  main_title: string;
  second_title: string;
  description: string;
  img: string;
}

export const useChina = () => {
  return useQuery<IChina[]>({
    queryKey: ["/china/"],
    queryFn: async () => {
      try {
        const response = await httpsClient.get("main/china/");
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