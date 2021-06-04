import '../../assets/styles/Overview/style.scss'
import NavBar from '../../components/NavBar'
import HomeContent from './OverviewContent'

export default function Home(props: any) {

    return (
        <section className="home--background home--container">
            <NavBar />
            <HomeContent />
        </section>
    )
}
