import Home from '../Home/Overview'
import ServiceList from '../Home/ServiceList'
import Supporting from '../Home/Supporting'
import Contact from '../Home/Contact'
import ProjectList from '../Home/ProjectList'
import Comment from '../Home/Comment'
import Footer from '../components/Footer'

const App: React.FC = () => {
  return (
    <div>
      <main>
        <Home />
        <ServiceList />
        <Supporting />
        <Contact />
        <ProjectList />
        <Comment />
      </main>
      <Footer />
    </div>
  );
}

export default App;
