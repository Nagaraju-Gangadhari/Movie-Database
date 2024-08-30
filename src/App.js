import {Switch, Route} from 'react-router-dom'
import Popular from './components/Popular'
import Upcoming from './components/Upcoming'
import Toprated from './components/Toprated'
import NotFound from './components/NotFound'
import './App.css'

// write your code here

const App = () => (
  <Switch>
    <Route exact path="/" component={Popular} />
    <Route exact path="/top-rated" component={Toprated} />
    <Route exact path="/upcoming" component={Upcoming} />
    <Route component={NotFound} />
  </Switch>
)

export default App
