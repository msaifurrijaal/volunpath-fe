import 'next-auth';
import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      username: string;
      email: string;
      role: string;
      status: string;
      fullname: string;
      phone: string;
      image: string;
      address: string;
      city: string;
      token: string;
      refreshToken: string;
    } & DefaultSession['user'];
  }

  interface JWT {
    id: number;
    username: string;
    email: string;
    role: string;
    status: string;
    fullname: string;
    phone: string;
    image: string;
    address: string;
    city: string;
    token: string;
    refreshToken: string;
  }
}
