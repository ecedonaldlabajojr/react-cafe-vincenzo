import React from 'react'
import WelcomeHero from '../WelcomeHero/WelcomeHero'
import HeroSection from '../HeroSection/HeroSection'
import heroSectionData from '../../data/hero-section-data';
import { tileImages } from '../../images/home-images-src';
import styles from './Home.module.css';

const heroSections = heroSectionData.map(sectionData => <HeroSection data={sectionData} key={sectionData._id} />)

const tileImagesSection = (
    <section className={styles["tile-images-section"]}>
        <div className={styles["tile-images-wrapper"]}>
            {tileImages.map(img => <img src={img.src} name={img.id} key={img.id} className={styles.tileImg} />)}
        </div>
    </section>
)

const Home = () => {
    return (
        <React.Fragment>
            <WelcomeHero />
            <HeroSection {...heroSectionData[0]} />
            <HeroSection {...heroSectionData[1]} />
            {tileImagesSection}
        </React.Fragment>
    )
}
export default Home
