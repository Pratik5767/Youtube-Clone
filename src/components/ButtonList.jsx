import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCategory } from '../redux/appSlice'

const buttonList = [
    "All", "Javascript", "Java", "Live", "Music", "Song", "vlogs", "Trending", "Comedy", "News", "React", "Movie", "Recently uploaded", "New to you"
]

const ButtonList = () => {
    const [active, setActive] = useState("All")
    const dispatch = useDispatch();

    const videoByTag = (tag) => {
        if (active !== tag) {
            dispatch(setCategory(tag));
            console.log(tag);
            setActive(tag);
        }
    }

    return (
        <div className='fixed bg-white flex w-[100%] overflow-x-scroll py-4 my-1 no-scrollbar'>
            {
                buttonList.map((item, index) => {
                    return (
                        <div key={index} >
                            <button onClick={() => { videoByTag(item) }} className={`${active === item ? "bg-slate-900 text-white" : "bg-gray-200"} mx-2 font-medium px-2 py-1 rounded-lg`}>
                                <span className='whitespace-nowrap'>{item}</span>
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ButtonList