// pages/UsersManagement.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import "@/app/globals.css";
import Header from '@/components/Header';



export default function Home() {
  //const [users, setUsers] = useState<User[]>([]);

  /*useEffect(() => {
    // Fetch users from the backend API when the component mounts
    axios.get('/api/users') // Assume a RESTful API endpoint for users
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);*/

  return (
      <Header />
  );
}
