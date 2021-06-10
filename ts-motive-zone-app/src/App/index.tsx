import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from '../Home'
import Footer from '../components/Footer'
import Transaction from '../Transaction'


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <main>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/transaction' component={Transaction} />
          </Switch>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>

  );
}

export default App;
