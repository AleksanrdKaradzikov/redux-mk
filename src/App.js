import { Routes, Route } from "react-router-dom";
import { Layout } from "./shared/Layout";
import { UsersPage } from "./pages/UsersPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
