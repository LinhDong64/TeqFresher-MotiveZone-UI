import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from '../Home'
import Footer from '../components/Footer'
import Transaction from '../Transaction'
import { useEffect } from 'react'
import {getStrapiToken} from '../services/callAPI'


const App: React.FC = () => {
  useEffect(()=>{
    getStrapiToken();
  }, [])
  return (
    <Router>
      <div>
        <main>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/transaction' component={Transaction} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
