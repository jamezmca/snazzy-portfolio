import React from 'react'
import styles from './imgoverlay.module.css'

export default function ImgOverlay(props) {
    const { imgSrc, title, githubLink, projectLink, children } = props
    return (
        <div className={styles.imgDisplay}>
            <img className={styles.img} src={imgSrc} alt="store" />
            <div className={styles.overlay}>
                <h2 className={styles.overlayHeader}>{title.toUpperCase()}</h2>
                <p className={styles.paragraph}>
                    {children}
                </p>
                <div className={styles.links}>
                    <a href={githubLink} rel="noreferrer" target="_blank" className={styles.button}><i className={`fa-brands fa-github ${styles.icon}`}></i></a>
                    <a href={projectLink} rel="noreferrer" target="_blank" className={styles.button}>Link to project &#8594;</a>
                </div>
            </div>
        </div>
    )
}
