import Home from '../Home'
import ServiceList from '../ServiceList'
import ProjectList from '../ProjectList'
import Support from '../Support'
import Contact from '../Contact'
import Comment from '../Comment'
import Footer from '../Footer'

function App() {
  return (
    <div>
      <main>
        <Home />
        <ServiceList/>
        <Support/>
        <Contact/>
        <ProjectList/>
        <Comment/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
