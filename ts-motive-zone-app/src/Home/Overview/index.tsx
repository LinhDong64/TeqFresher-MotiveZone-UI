import NavBar from '../../components/NavBar'
import OverviewContent from './OverviewContent'

export default function Overview(props: any) {

    return (
        <section className="home--background home--container">
            <NavBar />
            <OverviewContent />
        </section>
    )
}
