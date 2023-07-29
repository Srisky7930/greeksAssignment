import {BrowserRouter, Route, Switch} from 'react-router-dom'

import UserPage from './components/UserPage'
import Login from './components/Login'
import Movies from './components/Movies'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={UserPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/movies" component={Movies} />
    </Switch>
  </BrowserRouter>
)

export default App
