import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { loginAuth } from '@/services/auth/loginAuth';

export const authOptions: NextAuthOptions = {
    session: {
      strategy: 'jwt'
    },
    debug: true,
    secret: process.env.SECRET_TOKEN,
    providers: [
      CredentialsProvider({
        type: 'credentials',
        name: 'Credentials',
        credentials: {
          email: { label: 'Email', type: 'email' },
          password: { label: 'Password', type: 'password' }
        },
        async authorize(credentials) {
            try {
              if (!credentials) {
                throw new Error('Email and password are required');
              }

                const res = await loginAuth(credentials?.email, credentials?.password);

                if (res.data) {
                    return res.data.data;
                } else {
                    throw new Error(res.data.message);
                }
                } catch (error: any) {
                if (error.response) {
                  if (error.response.status === 401) {
                    throw new Error('Email atau password tidak valid');
                  }

                    throw new Error(error.response.data.message);
                } else {
                    throw new Error(error.message);
                }
            }
        }
      })
    ],
    callbacks: {
      async jwt({ token, user, trigger, session }) {
        if (trigger === 'update') {
          return { ...token, ...session.user };
        }
  
        return { ...token, ...user };
      },
  
      async session({ session, token }) {
        session.user = token as any;
  
        return session;
      }
    },
    pages: {
      signIn: '/login'
    }
  };