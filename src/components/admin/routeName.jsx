import React from 'react';
import { useLocation } from 'react-router-dom';
import { navText } from "./navbar_admin.jsx"

export default function RouteName() {
    const location = useLocation();
    const { pathname } = location;

    let content;
    const matchedRoute = navText.find(route => route.path === pathname);
    if (matchedRoute) {
        content = `Admin/${matchedRoute.item}`;
    }

    return <div className='font-titleFont py-5 text-h6 font-bold text-lightbrown w-full'>
    {content || "Unknown Route"}
    <hr className='my-3' />
</div>
}
