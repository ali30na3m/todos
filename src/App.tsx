import { Route, Routes } from "react-router"
import Login from './Page/Login/Login';
import TodoList from "./Page/TodoList/TodoList";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Register from "./Page/Register/Register";

export default function App() {

  // const router = useRoutes(Routers)

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/TodoList/:value"
        element={
          <ProtectedRoute>
            <TodoList />
          </ProtectedRoute>
        }
      />
      <Route path="/Register" element={<Register />} />
    </Routes>
  )
}

