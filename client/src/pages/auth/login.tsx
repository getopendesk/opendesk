import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: Replace with actual API call
		localStorage.setItem("token", "dummy-token");
		navigate("/dashboard");
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-background">
			<Card className="w-[400px]">
				<form onSubmit={handleSubmit}>
					<CardHeader>
						<CardTitle>Welcome back</CardTitle>
						<CardDescription>Login to your account to continue</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4 mt-8">
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="abc@example.com"
								value={formData.email}
								onChange={(e) =>
									setFormData((prev) => ({ ...prev, email: e.target.value }))
								}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								type="password"
								value={formData.password}
								onChange={(e) =>
									setFormData((prev) => ({ ...prev, password: e.target.value }))
								}
								required
							/>
						</div>
						<Button type="submit" className="w-full">
							Login
						</Button>
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<span className="w-full border-t" />
							</div>
							<div className="relative flex justify-center text-xs uppercase">
								<span className="bg-background px-2 text-muted-foreground">
									Or continue with
								</span>
							</div>
						</div>
						<Button type="button" variant="outline" className="w-full">
							<Github className="mr-2 h-4 w-4" />
							Github
						</Button>
					</CardContent>
					<CardFooter className="flex justify-center">
						<p className="text-sm text-muted-foreground">
							Don't have an account?{" "}
							<a href="/register" className="text-primary hover:underline">
								Sign up
							</a>
						</p>
					</CardFooter>
				</form>
			</Card>
		</div>
	);
}
