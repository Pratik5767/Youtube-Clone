import React, { useEffect } from 'react';
import axios from "axios";
import API_KEY, { YOUTUBE_VIDEO_API } from '../constants/youtube';
import VideoChart from './VideoChart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setHomeVideo } from '../redux/appSlice';

const VideoContainer = () => {
    const { video, category } = useSelector((store) => store.app);
    const dispatch = useDispatch();

    const fetchYoutubeVideo = async () => {
        try {
            const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
            dispatch(setHomeVideo(res?.data?.items));
        } catch (error) {
            console.log(error);
        }
    }

    const fetchVideoByCategory = async () => {
        try {
            const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
            console.log(res?.data);
            dispatch(setHomeVideo(res?.data?.items));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (category === "All") {
            fetchYoutubeVideo();
        } else {
            fetchVideoByCategory();
        }
    }, [category])

    return (
        <div className='grid grid-cols-3 gap-3 mt-[5%]'>
            {
                video.map((item) => {
                    return (
                        <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id}`} key={typeof item.id === 'object' ? item.id.videoId : item.id}>
                            <VideoChart item={item} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default VideoContainer