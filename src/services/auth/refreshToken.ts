import AxiosInstance from "@/configs/api/AxiosIstance";

export const refreshToken = async (refreshToken: string) => {
    const axios = AxiosInstance();

    const res = await axios.get("/auth/refresh-token", {
        headers: {
            Authorization: `Bearer ${refreshToken}`,
        }
    });

return res;
}