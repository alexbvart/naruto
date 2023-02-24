import { Header } from 'components/Header';
import React from 'react';

/* COMPONENTS */

import layout from './Layout.module.css'

const AppLayout = ({ children }) => {
    return (
        <>  
            <Header></Header>
            <div className={layout.app_wrapper}>
                {children}
            </div>
        </>
    );
}
export default AppLayout;