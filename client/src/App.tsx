import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router";
import Home from "./pages/home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ProtectedRoute from "./components/auth/ProtectedRoute";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				<Route element={<ProtectedRoute />}>
					<Route path="/" element={<Navigate to="/dashboard" />} />
					<Route path="/dashboard" element={<Home />} />
				</Route>
			</Routes>
		</Router>
	);
}
