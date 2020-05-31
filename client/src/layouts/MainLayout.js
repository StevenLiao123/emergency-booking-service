import React from 'react';
import Styles from './MainLayout.module.css';

export const MainLayout = props => {
    return (
        <div className={Styles.container}>
            <header className={Styles.title}>{props.title}</header>
            <main className={Styles.main}>{props.children}</main>
        </div>
    )
}