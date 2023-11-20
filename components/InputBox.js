import React, { useRef } from 'react'
import Image from 'next/image'
import { useSession } from "next-auth/react"
import UserAvatar from '@/public/user.png'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { db, storage } from '@/firebase'
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { collection, addDoc, updateDoc, doc as doki, serverTimestamp, FieldValue } from 'firebase/firestore'
import { useState } from 'react'
import firebase from 'firebase/compat/app'

function InputBox() {
    const { data: session, status } = useSession();
    const inputRef = useRef(null);
    const filepickerRef = useRef(null);
    const [imagetoPost, setImagetoPost] = useState(null);


    const sendPost = async (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return;
        // Get the current timestamp
        const currentTimestamp = new Date().toLocaleString('pt-PT', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short',
        });

        const valRef = collection(db, 'posts');

        await addDoc(valRef, {
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            timestamp: currentTimestamp,
            url: null,
        }).then(
            doc => {
                if (imagetoPost) {
                    const storageRef = ref(storage, `posts/${doc.id}`);

                    uploadString(storageRef, imagetoPost, "data_url").then((snapshot) => {
                        getDownloadURL(snapshot.ref).then(async (url) => {
                            await updateDoc(doki(valRef, doc.id), {
                                url: url
                              });
                        });
                    });

                    removeImage();
                }
            }
        )

        console.log(inputRef.current.value);

        inputRef.current.value = "";
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImagetoPost(readerEvent.target.result)
        }
    }

    const removeImage = () => {
        setImagetoPost(null);
    }


    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 p-4 items-center '>
                <Image
                    className='rounded-full cursor-pointer'
                    /*src={sessionStorage.user.image}*/
                    src={UserAvatar}
                    width={40}
                    height={40}
                    layout='fixed'
                />
                <form className='flex flex-1'>
                    <input
                        className=' rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
                        type="text"
                        ref={inputRef}
                        placeholder={`What's on your mind, ${session.user.name} ?`} />
                    <button hidden type='submit' onClick={sendPost}>Submit</button>
                </form>
                {
                    imagetoPost && (
                        <div onClick={removeImage} className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'>
                            <img className='h-10 object-contain' alt='' src={imagetoPost}></img>
                            <p className='text-xs text-center text-red-500'>Remove</p>
                        </div>
                    )
                }
            </div>
            <div className='flex justify-evenly p-3 border-1'>
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500' />
                    <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                </div>
                <div onClick={() => filepickerRef.current.click()} className='inputIcon'>
                    <CameraIcon className='h-7 text-green-400' />
                    <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                    <input ref={filepickerRef} onChange={addImageToPost} type='file' hidden></input>
                </div>
                <div className='inputIcon'>
                    <EmojiHappyIcon className='h-7 text-yellow-300' />
                    <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox