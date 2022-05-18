import React from 'react'
import styles from './experience.module.css'
import ListEntry from './ListEntry'
import SectionIntroduction from './SectionIntroduction'

export default function Experience() {
  return (
    <section id="experience">
      <div className={styles.wrapper}>
        <SectionIntroduction dark={true}>EXPERIENCE</SectionIntroduction>
        <div className={styles.sectionContent}>
          <ListEntry title={"Zetane Systems"} date={"Nov 2021 - Present"}>
            <li>Full Stack Developer responsible for deploying our SAAS product; The Zetane Protector is a Machine Learning and Artificial Intelligence platform created to provide robustness & sensitivity (QA) for the industry.</li>
            <li>Tech-Stack: Next.js + Django + AWS + TailwindCSS + Sentry + Cypress</li>
          </ListEntry>
          <ListEntry title={"McMillen Jacobs Associates"} date={"Nov 2016 - Apr 2021"}>
            <li>Geo-Structural Engineer responsible for the engineering design and project delivery of a myriad of multi-million dollar civil infrastructure projects.</li>
          </ListEntry>
          <ListEntry title={"Math Tutor"} date={"Nov 2013 - Present"}>
            <li>I have helped over 50 students coming from all types of academic standing to achieve higher in mathematics and science fields.</li>
          </ListEntry>
        </div>

      </div>
    </section>
  )
}
