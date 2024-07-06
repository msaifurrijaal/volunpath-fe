import AxiosInstance from '@/configs/api/AxiosIstance';
import type { OrganizationData, VolunteerData } from '@/types/userTypes';

export const registerUser = async (data: VolunteerData | OrganizationData) => {
  const axios = AxiosInstance();

  const res = await axios.post('/auth/register', data);

  return res;
};
