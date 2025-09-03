import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const { username, password } = await request.json();
  if (username === 'user' && password === 'password') {
    const cookieStore = cookies();
    (await cookieStore).set('auth_token', 'my-secret-token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, 
      path: '/',
    });

    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  }
  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}
