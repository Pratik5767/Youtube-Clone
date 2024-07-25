import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';

const sidebarItem = [
    {
        icons: <IoHomeOutline size={"24px"} />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size={"24px"} />,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size={"24px"} />,
        title: "subscription"
    },
    {
        icons: <IoHomeOutline size={"24px"} />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size={"24px"} />,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size={"24px"} />,
        title: "subscription"
    },
    {
        icons: <IoHomeOutline size={"24px"} />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size={"24px"} />,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size={"24px"} />,
        title: "subscription"
    },
    {
        icons: <IoHomeOutline size={"24px"} />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size={"24px"} />,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size={"24px"} />,
        title: "subscription"
    },
    {
        icons: <IoHomeOutline size={"24px"} />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size={"24px"} />,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size={"24px"} />,
        title: "subscription"
    },
    {
        icons: <IoHomeOutline size={"24px"} />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size={"24px"} />,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size={"24px"} />,
        title: "subscription"
    },
]

const Sidebar = () => {
    const open = useSelector((store) => store.app.open);

    return (
        <div className={`fixed left-0 ${open ? "w-[16%]" : "w-[6%]"}  p-5 h-[calc(100vh-4.625rem)] bg-white overflow-y-scroll overflow-x-hidden`}>
            {
                sidebarItem.map((item, index) => {
                    return (
                        <div key={index} className='flex my-4'>
                            {item.icons}

                            <p className={`ml-6 ${open ? "block" : "hidden"}`}>{item.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sidebar