import { httpsClient } from "@/http";
import { useQuery } from "@tanstack/react-query";

export interface IDocs {
  id: string;
  main_title: string;
  description: string;
  docs: string;

}

export const useDocs = () => {
  return useQuery<IDocs[]>({
    queryKey: ["/docs/"],
    queryFn: async () => {
      try {
        const response = await httpsClient.get("main/docs/");
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