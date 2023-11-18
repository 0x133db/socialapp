// pages/UsersManagement.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import "@/app/globals.css";
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Feed from '@/components/Feed';
import LoadingAnimation from '@/components/LoadingAnimation'

//ServerSide
import { useSession, getSession } from "next-auth/react"
import { redirect } from 'next/navigation';
import Head from 'next/head';



export default function Home() {
  //const [users, setUsers] = useState<User[]>([]);

  /*useEffect(() => {
    // Fetch users from the backend API when the component mounts
    axios.get('/api/users') // Assume a RESTful API endpoint for users
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);*/

  const { data: session, status } = useSession();
  if (status === "loading") {
    return <LoadingAnimation></LoadingAnimation>
  }

  if (status === "unauthenticated") {
    console.log("Unauthenticated")
    return (window.location.replace('/'))
  }

  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />
      <main className='flex'>
        <Sidebar />
        <Feed/>
      </main>
    </div>
  );
}
