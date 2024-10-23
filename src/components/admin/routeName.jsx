import React from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteName() {
    const location = useLocation();
    const { pathname } = location;

    let content;
    switch (pathname) {
        case '/admin/home':
            content = "Admin/Dashboard";
            break;
        case '/admin/schedule':
            content = "Admin/Schedule";
            break;
        case '/admin/template':
            content = "Admin/Template";
            break;
        case '/admin/question':
            content = "Admin/Question";
            break;
        case '/admin/members':
            content = "Admin/Members";
            break;
        default:
            break;
    }

    return <div className='font-titleFont p-5 text-h6 font-bold text-lightbrown w-full'>
    {content}
    <hr className='my-3' />
</div>
}
