import axios from 'axios';

const AxiosInstance = () => {
  const res = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
};

export default AxiosInstance;
