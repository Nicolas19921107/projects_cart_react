import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Cart_PreOrder from './cart_page/Cart_PreOrder'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <>
          <Switch>
            <Route exact path="/carts/PreOrder">
              <Cart_PreOrder />
            </Route>
          </Switch>
        </>
      </Router>
    </>
  )
}

export default App
