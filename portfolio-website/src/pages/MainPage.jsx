import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { Footer } from '../components/Footer'
import { projects } from '../scripts/projects_overview'
import { focus_skills, all_skills } from '../scripts/skills'

const MainPage = ( { change_text_color } ) => {

    return (
        <div className='relative z-10'>
            <Nav />
            <Hero change_text_color={ change_text_color } />
            <Projects projects={ projects } change_text_color={change_text_color} />
            <Skills focus_skills={ focus_skills } all_skills={ all_skills } change_text_color={ change_text_color }/>
            <Footer />
        </div>
    )
}

export default MainPage