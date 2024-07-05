import AxiosInstance from "@/configs/api/AxiosIstance";

export const loginAuth = async (email: string, password: string) => {
    const axios = AxiosInstance();

    const res = await axios.post("/auth/login", {
        email,
        password,
    });
   
return res;
}