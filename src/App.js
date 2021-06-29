import { Header, Footer } from "./components"
import { Layout, RouterWindow} from "./App.styles";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <Layout>
      <Header />
      <RouterWindow>
        Routing stuff here
      </RouterWindow>
      <Footer />
      <GlobalStyle />
    </Layout>
  );
}

export default App;
