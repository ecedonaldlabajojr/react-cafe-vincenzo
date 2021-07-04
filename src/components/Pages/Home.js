import React from 'react'
import WelcomeHero from '../WelcomeHero/WelcomeHero'
import HeroSection from '../HeroSection/HeroSection'
import heroSectionData from '../../data/hero-section-data';

const heroSections = heroSectionData.map(sectionData => <HeroSection data={sectionData} key={sectionData._id} />)

const Home = () => {
    return (
        <React.Fragment>
            <WelcomeHero />
            <HeroSection {...heroSectionData[0]} />
            <HeroSection {...heroSectionData[1]} />
        </React.Fragment>
    )
}
export default Home
