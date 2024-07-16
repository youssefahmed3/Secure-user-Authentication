import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req: any) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  
    const { pathname } = req.nextUrl;
  
    // Redirect to home if authenticated user tries to access login or register
    if (token && (pathname === '/login' || pathname === '/register')) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  
    // Redirect to login if unauthenticated user tries to access home
    if (!token && pathname === '/') {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  
    // Allow the request to continue if it does not match the above rules
    return NextResponse.next();
  }