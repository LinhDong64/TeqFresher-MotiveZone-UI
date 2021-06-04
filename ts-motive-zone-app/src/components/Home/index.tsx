import React from 'react'
import '../../assets/styles/Home/style.scss'
import NavBar from './NavBar'
import HomeContent from './HomeContent'

export default function Home(props: any) {

    return (
        <section className="home--background home--container">
            <NavBar />
            <HomeContent />
        </section>
    )
}
