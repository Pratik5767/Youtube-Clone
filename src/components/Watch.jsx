import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { API_KEY } from '../constants/youtube';
import axios from 'axios';
import Avatar from 'react-avatar';
import { GrDislike, GrLike } from "react-icons/gr";
import { PiShareFatLight } from "react-icons/pi";
import { HiDownload } from 'react-icons/hi';
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import LiveChats from './LiveChats';
import { useDispatch } from 'react-redux';
import { setMessage } from '../redux/chatSlice';

const Watch = () => {
    const [input, setInput] = useState("");
    const [singleVideo, setSingleVideo] = useState(null);
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    const dispatch = useDispatch();

    const getSingleVideo = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
            setSingleVideo(res?.data?.items[0]);
        } catch (error) {
            console.log(error);
        }
    }

    const sendMessageHandler = () => {
        dispatch(setMessage({ name: "pratik salunke", message: input }))
        setInput("");
    }

    useEffect(() => {
        getSingleVideo();
    }, []);

    return (
        <div className='ml-[17%] flex mt-5 w-full'>
            <div className='flex w-[88%]'>
                <div>
                    <iframe
                        width="900"
                        height="500"
                        src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    >
                    </iframe>

                    <h1 className='font-bold mt-2 text-lg w-[80%]'>{singleVideo?.snippet?.title}</h1>

                    <div className='flex justify-between items-center mt-2'>
                        <div className='flex items-center justify-between w-[35%]'>
                            <div className='flex gap-2'>
                                <Avatar src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg' size={"25px"} round={true} className='cursor-pointer' />

                                <h1 className='font-bold ml-2'>{singleVideo?.snippet?.channelTitle}</h1>
                            </div>

                            <button className='px-4 py-1 font-medium bg-black text-white rounded-full'>Subscribe</button>
                        </div>

                        <div className='flex items-center w-[40%] justify-between'>
                            <div className='flex justify-between items-center gap-1 cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
                                <GrLike className='mr-3' size={"20px"} />
                                <GrDislike size={"20px"} />
                            </div>

                            <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
                                <PiShareFatLight size={"20px"} className='mr-3' />
                                <span>Share</span>
                            </div>

                            <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
                                <HiDownload size={"20px"} className='mr-3' />
                                <span>Download</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[100%] border border-gray-300 ml-8 rounded-lg h-fit p-4'>
                    <div className='flex justify-between items-center'>
                        <h1>Top Chat</h1>
                        <BsThreeDotsVertical />
                    </div>

                    <div className=' overflow-y-auto h-[28rem] flex flex-col-reverse'>
                        <LiveChats />
                    </div>

                    <div className='flex items-center justify-between border-t p-2'>
                        <div className='flex items-center w-[90%]'>
                            <div>
                                <Avatar
                                    src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg'
                                    size={"25px"}
                                    round={true}
                                    className='cursor-pointer'
                                />
                            </div>

                            <input value={input} onChange={(e) => setInput(e.target.value)} className='border-gray-300 border-b outline-none ml-2' type='text' placeholder='Send Message...' />

                            <div className='hover:bg-gray-200 cursor-pointer p-2 rounded-full'>
                                <LuSendHorizonal size={"20px"} onClick={sendMessageHandler} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watch