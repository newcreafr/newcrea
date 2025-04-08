import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import AppRouter from "./router/Router.jsx";

export default function App() {
  return (
    <Router>
      <Layout>
        <AppRouter/>
      </Layout>
    </Router>
  );
}
