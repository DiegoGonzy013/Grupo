import React from "react";
import "./style.css";
import BarraNav from './components/BarraNav';

export default function App() {
  return (
    return (
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

  );
}
