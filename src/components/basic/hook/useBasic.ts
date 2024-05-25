import { httpsClient } from "@/http";
import { useQuery } from "@tanstack/react-query";

export interface IDirections {
  id: string;
  main_title: string;
  description: string;
  img: string;
}

export const useDirection = () => {
  return useQuery<IDirections[]>({
    queryKey: ["/directions/"],
    queryFn: async () => {
      try {
        const response = await httpsClient.get("main/directions/");
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