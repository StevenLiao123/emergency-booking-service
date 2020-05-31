import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Loader } from './components';
import AppRoutes from ".//module/AppRoutes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            {AppRoutes.map(
              (
                {
                  path,
                  title,
                  exact,
                  component: Component,
                  layout: Layout,
                  highlight
                },
                index
              ) => (
                <Route
                  key={index}
                  path={path}
                  exact={exact}
                  render={props => (
                    <Layout title={title}>
                      <Component {...props} />
                    </Layout>
                  )}
                ></Route>
              )
            )}
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
