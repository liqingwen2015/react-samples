import "./App.css";
import { BrowserRouter as Routers, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routers>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/test" element={<ProtectedRoute><Test /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Routers>
    </div>
  );
}
export function ProtectedRoute(props) {

  if (localStorage.getItem('expense-tracker-user')) {
    return props.children
  } else {
    return <Navigate to='/login' />
  }

}
export default App;
