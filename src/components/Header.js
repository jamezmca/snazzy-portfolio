import React from 'react'
import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.headerText}>SMOLJAMES</h1>
            <div className={styles.navItems}>
                <a href='#about-me' className={styles.anchor}>
                    <i className={`fa-solid fa-user-astronaut ${styles.icons}`}></i>
                </a>
                <a href='#experience' className={styles.anchor}>
                    <i className={`fa-solid fa-medal ${styles.icons}`}></i>
                </a>
                <a href='#projects' className={styles.anchor}>
                    <i className={`fa-solid fa-diagram-project ${styles.icons}`}></i>
                </a>
            </div>
        </header>
    )
}
