// frontend/src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import HomePage from "./pages/HomePage"
import Signin from "./pages/SignIn";
import Signup from "./pages/SignUp";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Cargando...</p>;
  if (!user) return <Navigate to="/signin" />;
  return children;
}

function App() {
  return (
    <AuthProvider>
    
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <h1>Perfil privado</h1>
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
      
    </AuthProvider>
  );
}

export default App;

