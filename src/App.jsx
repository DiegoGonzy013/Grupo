import React from "react";
import "./style.css";
import BarraNav from './components/BarraNav';
import { menu } from './data/menu';

export default function App() {
  return (
    <Router>
        <BarraNav/>
        {menu((item) => {
          return (
            <Route
              key={item.id}
              path={item.path}
              exact
              component={item.component}
            />
          );
        })}
        </Router>
  );
}
