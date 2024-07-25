import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline, IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from 'react-icons/ri';
import { useDispatch, useSelector } from "react-redux"
import { setCategory, setShowSuggestion, toggleSideBar } from '../redux/appSlice';
import axios from 'axios';
import { SEARCH_SUGGESTIONS_API } from '../constants/youtube';

const Navbar = () => {
    const [input, setInput] = useState("");
    const [suggestion, setSuggestion] = useState(false);
    const dispatch = useDispatch();
    const { searchSuggestion } = useSelector((store) => store.app);

    const searchVideo = () => {
        dispatch(setCategory(input));
        setInput("");
    }

    const toggleHandler = () => {
        dispatch(toggleSideBar());
    }

    const showSuggestion = async () => {
        try {
            const res = await axios.get(SEARCH_SUGGESTIONS_API + input);
            console.log(res?.data[1]);
            dispatch(setShowSuggestion(res?.data[1]))
        } catch (error) {
            console.log(error);
        }
    }

    const openSuggestion = () => {
        setSuggestion(true);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            showSuggestion();
        }, 200)

        return () => {
            clearTimeout(timer);
        }
    }, [input])

    return (
        <div className='flex justify-center items-center w-[100%] fixed top-0 bg-white z-10'>
            <div className='w-[98%] flex justify-between items-center py-4'>
                <div className='ml-2 flex items-center'>
                    <GiHamburgerMenu className='cursor-pointer' onClick={toggleHandler} size={"24px"} />

                    <img
                        src='https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png'
                        alt='ytlogo'
                        width={"115px"}
                        className='px-4'
                    />
                </div>

                <div className='w-[40%] flex items-center'>
                    <div className='flex w-[100%]'>
                        <input onFocus={openSuggestion} type='text' placeholder='Search' className='w-full py-2 px-4 border border-gray-400 rounded-l-full outline-none' value={input} onChange={(e) => setInput(e.target.value)} />

                        <button onClick={searchVideo} className='py-2 border rounded-r-full border-gray-400 px-4'>
                            <IoIosSearch size={"24px"} />
                        </button>
                    </div>

                    {
                        (suggestion && searchSuggestion.length !== 0) &&
                        <div className='absolute top-3 z-[50] w-[35%] py-5 bg-white shadow-lg mt-12 rounded-lg border border-gray-200'>
                            <ul>
                                {
                                    searchSuggestion.map((text, index) => {
                                        return (
                                            <div className='px-4 flex items-center' key={index}>
                                                <IoIosSearch size={"22px"} />
                                                <li className='px-2 py-1 cursor-pointer font-medium'>{text}</li>
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    }
                </div>

                <div className='w-[7%] justify-between flex items-center z-0'>
                    <RiVideoAddLine size={"25px"} className='cursor-pointer' />
                    <IoIosNotificationsOutline size={"25px"} className='cursor-pointer' />

                    <Avatar
                        src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg'
                        size={"25px"}
                        round={true}
                        className='cursor-pointer'
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar