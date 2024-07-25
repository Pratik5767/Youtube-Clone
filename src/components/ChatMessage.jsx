import React from 'react'
import Avatar from 'react-avatar'

const ChatMessage = ({item}) => {
    return (
        <div className='flex items-center'>
            <div>
                <Avatar
                    src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg'
                    size={"25px"}
                    round={true}
                    className='cursor-pointer'
                />
            </div>

            <div className='flex items-center'>
                <h1 className='ml-2 font-bold text-sm'>{item.name}</h1>
                <p className='ml-2 py-2 text-sm'>{item.message}</p>
            </div>
        </div>
    )
}

export default ChatMessage