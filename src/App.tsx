import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './header';
import ConfigKebab from './config-kebab';
import Home from './home';
import Kebab from './kebab';
import { Kebab as IKebab } from './data/kebabs.data';
import OrderValidate from './order-validate';

function App() {
  const [cart, setCart] = useState([] as {
    kebab: IKebab,
    quantity: number,
  }[]);

  const handleOnOrder = (kebab: IKebab) => {
    setCart(cart.concat({ kebab: kebab, quantity: 1 }))
  }

  return (
    <main>
      <Header />

      <Router>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={() => <Home
            cart={cart} />} />
          <Route path={`${process.env.PUBLIC_URL}/kebabs/config`} component={(props: any) => <ConfigKebab
            {...props} onOrder={handleOnOrder} />} />
          <Route path={`${process.env.PUBLIC_URL}/kebabs/:name`} component={(props: any) => <Kebab
            {...props} onOrder={handleOnOrder} />} />

          <Route path={`${process.env.PUBLIC_URL}/order-validate`} component={OrderValidate} />
        </Switch>
      </Router>

      
    </main>
  );
}

export default App;
