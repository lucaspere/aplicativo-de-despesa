import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const ExpenseDashboardPage = () => <h1>Teste</h1>
const NotFoundPage = () => <h1>404</h1>
const AppRouters = () => {

   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={ExpenseDashboardPage} />
            <Route component={NotFoundPage} />
         </Switch>
      </BrowserRouter>
   )
}

export default AppRouters