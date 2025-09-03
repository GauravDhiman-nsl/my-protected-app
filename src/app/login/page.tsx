"use client";

import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function LoginPage() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const username = "user";
    const password = "password";
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
     
      router.push('/dashboard');
      router.refresh(); 
    } else {
      
      alert('Login failed!');
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>This is a mock login form. Click the button to log in.</p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
