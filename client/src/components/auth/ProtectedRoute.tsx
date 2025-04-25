import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
	// TODO: Replace with actual auth check
	const isAuthenticated = localStorage.getItem("token");

	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	return <Outlet />;
}
