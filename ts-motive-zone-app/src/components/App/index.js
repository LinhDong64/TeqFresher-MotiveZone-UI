import Home from '../Home'
import ServiceList from '../ServiceList'
import Supporting from '../Supporting'
import Contact from '../Contact'
import ProjectList from '../ProjectList'
import Comment from '../Comment'
import Footer from '../Footer'

function App() {
  return (
    <div>
      <main>
        <Home />
        <ServiceList/>
        <Supporting/>
        <Contact/>
        <ProjectList/>
        <Comment/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
