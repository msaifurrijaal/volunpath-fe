import AxiosInstance from '@/configs/api/AxiosIstance';

export const getEvents = async () => {
  const axios = AxiosInstance();

  const res = await axios.get('/events');

  return res;
};
