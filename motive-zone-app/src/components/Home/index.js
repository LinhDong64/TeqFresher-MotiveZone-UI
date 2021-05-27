import React from 'react'
import '../../assets/styles/Home/style.css'
import NavBar from './NavBar'
import HomeContent from './HomeContent'

export default function Home(props) {

    return (
        <section className="home-background home-container">
            <NavBar/>
            <HomeContent/>
        </section>
    )
}
