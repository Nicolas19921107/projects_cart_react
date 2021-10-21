import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Cart_PreOrder from './cart_page/Cart_PreOrder'
import Cart_Manage from './cart_page/Cart_Manage'
import Cart_Complete from './cart_page/Cart_Complete'
import Cart_ConfimOrder from './cart_page/Cart_ConfimOrder'

function App_Cart() {
  return (
    <>
      <Router>
        <>
          <Switch>
            <Route exact path="/carts/PreOrder">
              <Cart_PreOrder />
            </Route>
            <Route exact path="/carts/Manage">
              <Cart_Manage />
            </Route>
            <Route exact path="/carts/ConfirmOrder">
              <Cart_ConfimOrder />
            </Route>
            <Route exact path="/carts/Complete">
              <Cart_Complete />
            </Route>
          </Switch>
        </>
      </Router>
    </>
  )
}

export default App_Cart
