import AxiosInstance from '@/configs/api/AxiosIstance';

export const getActivities = async () => {
  const axios = AxiosInstance();

  const res = await axios.get('/activities');

  return res;
};
