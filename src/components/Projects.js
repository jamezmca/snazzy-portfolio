import React from 'react'
import styles from './projects.module.css'
import SectionIntroduction from './SectionIntroduction'
import moonglade from '../assets/moonglade.png'
import sf from '../assets/swoldier.png'
import stocks from '../assets/stocks.png'
import ImgOverlay from './ImgOverlay'

export default function Projects() {
  return (
    <section id="projects">
      <div className={styles.wrapper}>
        <SectionIntroduction >PROJECTS</SectionIntroduction>
        <div className={styles.sectionContent}>
          <ImgOverlay
            imgSrc={moonglade}
            title={"Moonglade Apparel"}
            projectLink={'http://www.moongladeapparel.com'}
            githubLink={'http://www.moongladeapparel.com'}>
            Online clothing store build with Stripe.js and Commerce.js
          </ImgOverlay>
          <ImgOverlay
            imgSrc={sf}
            title={"Swoldier Fitness"}
            projectLink={'http://www.swoldierfitness.com'}
            githubLink={'http://www.swoldierfitness.com'}>
            Nextjs + TailwindCSS + Node.js + Firebase to generate swolenormous workouts.
          </ImgOverlay>
          <ImgOverlay
            imgSrc={stocks}
            title={"Stock Analysis"}
            projectLink={'https://dreamy-darwin-658120.netlify.app/'}
            githubLink={'https://dreamy-darwin-658120.netlify.app/'}>
            Svelte + Node.js App for stock comparisons.
          </ImgOverlay>
        </div>
      </div>
    </section>
  )
}
