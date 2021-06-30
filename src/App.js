import { Layout, RouterWindow } from "./App.styles";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import { Header } from "./components";
import { Home } from "./pages";

const App = () => {
  return (
    <Router>
      <Layout>
        <Header />
        <RouterWindow>
          <Switch>
            <Route path="/" exact={true} component={Home} />
          </Switch>
        </RouterWindow>
        <GlobalStyle />
      </Layout>
    </Router>
  );
};

export default App;
