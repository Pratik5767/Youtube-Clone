import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { setMessage } from '../redux/chatSlice';
import { generateRandomMessage, generateRandomName } from '../redux/Helper';

const LiveChats = () => {
    const message = useSelector((store)=>store.chat.message);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(setMessage({ name: generateRandomName(), message: generateRandomMessage(16) }));
        }, 1000)

        return(() => {
            clearInterval(timer);
        })
    }, [])

    return (
        <div className='px-4 py-1'>
            <div>
                {
                    message.map((item, index) => {
                        return(
                            <ChatMessage key={index} item={item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LiveChats