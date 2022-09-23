import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { routes } from "./routes";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
