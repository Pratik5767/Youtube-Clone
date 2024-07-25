import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const Feed = () => {
    const open = useSelector((store) => store.app.open);

    return (
        <div className={`${open ? "ml-[17%]" : "ml-[7%]" } mr-5 w-[80%]`}>
            <ButtonList/>
            <VideoContainer/>
        </div>
    )
}

export default Feed