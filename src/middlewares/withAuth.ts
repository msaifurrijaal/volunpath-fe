import type { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getToken } from 'next-auth/jwt';

import { authPage, noAuth } from '@/configs/auth/matchers';


export default function withAuth(middleware: NextMiddleware) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathName = req.nextUrl.pathname;

    if (authPage.some(path => pathName.startsWith(path))) {
      const token = await getToken({
        req,
        secret: process.env.SECRET_TOKEN
      });

      if (!token && !noAuth.includes(pathName)) {
        const url = new URL('/login', req.url);

        url.searchParams.set('callbackUrl', encodeURI(req.url));

        return NextResponse.redirect(new URL('/login', req.url));
      }
    }

    if (noAuth.includes(pathName)) {
      const token = await getToken({
        req,
        secret: process.env.SECRET_TOKEN
      });

      if (token) {
        return NextResponse.redirect(new URL('/', req.url));
      }
    }

    return middleware(req, next);
  };
}
