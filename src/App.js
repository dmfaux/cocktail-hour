import { Cocktail, Home } from "./pages";
import { Layout, RouterWindow } from "./App.styles";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import GlobalStyle from "./GlobalStyles";
import { Header } from "./components";

const App = () => {
  return (
    <Router>
      <Layout>
        <Header />
        <RouterWindow>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/cocktail/:cocktailId" component={Cocktail} />
          </Switch>
        </RouterWindow>
        <GlobalStyle />
      </Layout>
    </Router>
  );
};

export default App;
