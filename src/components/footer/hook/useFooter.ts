import { httpsClient } from "@/http";
import { useQuery } from "@tanstack/react-query";

export interface IContact {
    id: string;
    first_contact: string;
    second_contact: string;
}

export const useContact = () => {
  return useQuery<IContact[]>({
    queryKey: ["/contact/"],
    queryFn: async () => {
      try {
        const response = await httpsClient.get("main/contacts/");
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