import { httpsClient } from "@/http";
import { useQuery } from "@tanstack/react-query";

export interface IBanners {
  id: string;
  main_title: string;
  second_title: string;
  description: string;
  img: string;
}

export const useBanners = () => {
  return useQuery<IBanners[]>({
    queryKey: ["banners"],
    queryFn: async () => {
      try {
        const response = await httpsClient.get("main/banners/");
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