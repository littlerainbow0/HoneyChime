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

    return <div className='p-5 bg-dark font-titleFont text-h5 text-lightyellow'>{content}</div>;
}
