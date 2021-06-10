import Overview from '../Home/Overview'
import ServiceList from '../Home/ServiceList'
import Supporting from '../Home/Supporting'
import Contact from '../Home/Contact'
import ProjectList from '../Home/ProjectList'
import Comment from '../Home/Comment'

export default function Home() {

  return (
    <div>
      <Overview />
      <ServiceList />
      <Supporting />
      <Contact />
      <ProjectList />
      <Comment />
    </div>
  )
}