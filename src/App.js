import { Header, Footer } from "./components"
import { Layout, RouterWindow} from "./App.styles";

const App = () => {
  return (
    <Layout>
      <Header />
      <RouterWindow>
        Routing stuff here
      </RouterWindow>
      <Footer />
    </Layout>
  );
}

export default App;
