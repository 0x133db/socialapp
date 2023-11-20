import Post from './Post'
import { db } from '@/firebase'
import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from 'react';

const Posts = () => {
    const valRef = collection(db, 'posts');
    const [realtimePosts, setrealtimePosts] = useState([]);

    useEffect(()=>{
        const getallPosts = async ()=>{
            const data = await getDocs(valRef);
            console.log(data);
            const docsRef = data.docs.map((doc)=>({
                ...doc.data(),id:doc.id
            }))
            console.log(docsRef)
            setrealtimePosts(docsRef)
        }
        getallPosts();
    },[])
    return (
        <div className='overflow-y-scroll' >
                {realtimePosts.map(
                    (post)=>{
                        return <Post key={post.id} name={post.name} message={post.message} email={post.email} timestamp={post.timestamp} image={post.image} postImage={post.url} ></Post>
                    }
                )}
        </div>
    )
}

export default Posts

{/*
            realtimePosts.map((post => (
                <Post
                    key={post.id}
                    name={post.data().name}
                    message={post.data().message}
                    email={post.data().email}
                    timestamp={post.data().timestamp}
                    image={post.data().image}
                    postImage={post.data().postImage}
                />
            )))
            */}