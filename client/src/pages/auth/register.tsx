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

export default function Register() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-background">
			<Card className="w-[400px]">
				<CardHeader>
					<CardTitle>Create an account</CardTitle>
					<CardDescription>Sign up to get started</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="firstName">First name</Label>
							<Input id="firstName" placeholder="John" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="lastName">Last name</Label>
							<Input id="lastName" placeholder="Doe" />
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="email" placeholder="m@example.com" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="password">Password</Label>
						<Input id="password" type="password" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="confirmPassword">Confirm Password</Label>
						<Input id="confirmPassword" type="password" />
					</div>
					<Button className="w-full">Create Account</Button>
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
					<Button variant="outline" className="w-full">
						<Github className="mr-2 h-4 w-4" />
						Github
					</Button>
				</CardContent>
				<CardFooter className="flex justify-center">
					<p className="text-sm text-muted-foreground">
						Already have an account?{" "}
						<a href="/login" className="text-primary hover:underline">
							Login
						</a>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}
