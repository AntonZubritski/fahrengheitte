import './app.scss'
import HomePage from '../home-page/home-page.jsx'
import { Route, Switch, Redirect } from 'react-router-dom'

const App = () => {

  return (
      <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Redirect to='/home'></Redirect>
      </Switch>
  )
}

export default App
