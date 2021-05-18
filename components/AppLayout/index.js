import React from 'react';

/* COMPONENTS */

import layout from './Layout.module.css'

const AppLayout = ({ children }) => {
    return (
        <>
            <div className={layout.app_wrapper}>
                {children}
            </div>
        </>
    );
}
export default AppLayout;