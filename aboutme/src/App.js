import React from "react";
import { Route,Switch } from "react-router-dom";
//메인페이지 임포트
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  
  return (
    <Switch>
      <Route path ="/" exact>
          <Header />
          <Main />
      </Route>
     </Switch>
  );
}


export default App;
