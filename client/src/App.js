import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppRoutes from ".//module/AppRoutes";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        {AppRoutes.map(({ path, title, exact, component: Component, layout: Layout} , index) => (
          <Route
            key={index}
            path={path}
            exact={exact}
            render={props => (
              <Layout title={title}>
                <Component {...props}/>
              </Layout>
            )}
          ></Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
