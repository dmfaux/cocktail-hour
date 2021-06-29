import { Header, Footer } from "./components"
import { Layout, RouterWindow} from "./App.styles";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        <Footer />
        <GlobalStyle />
      </Layout>
    </Router>
  );
}

export default App;
