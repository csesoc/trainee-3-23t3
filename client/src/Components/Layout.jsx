import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <>
            <div className='sidebar-component'>
                <Sidebar />
            </div>
            {children}
        </>
    );
};

export default Layout;
