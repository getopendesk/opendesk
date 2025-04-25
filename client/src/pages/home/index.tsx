import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	ChevronDown,
	ChevronRight,
	Clock,
	Filter,
	Inbox,
	LayoutDashboard,
	MoreHorizontal,
	Plus,
	Search,
	Settings,
	Share,
	Users,
} from "lucide-react";
import { Link } from "react-router";

export default function App() {
	return (
		<div>
			<div className="flex items-center px-4 py-2 border-b border-gray-200">
				<div className="flex items-center">
					<div className="bg-black rounded p-1 mr-2">
						<div className="w-6 h-6 text-white flex items-center justify-center">
							<span className="text-xs">OD</span>
						</div>
					</div>
					<span className="font-bold">OpenDesk</span>
				</div>
				<div className="ml-8 flex items-center text-sm">
					<span className="text-gray-500">Projects</span>
					<ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
					<span>CRM Dashboard</span>
				</div>
				<div className="ml-auto flex items-center">
					<Badge variant="outline" className="relative mr-4">
						<span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
							2
						</span>
						<Clock className="w-4 h-4" />
					</Badge>
					<Button variant="outline" className="flex items-center gap-1">
						<Share className="w-4 h-4" />
						<span>Share</span>
					</Button>
				</div>
			</div>

			<div className="flex">
				<div className="w-60 border-r border-gray-200 h-[calc(100vh-120px)]">
					<div className="p-2 border-b border-gray-200">
						<div className="flex items-center justify-between p-2 bg-blue-50 rounded">
							<div className="flex items-center">
								<div className="bg-blue-600 rounded p-1 mr-2 w-6 h-6 flex items-center justify-center">
									<span className="text-white text-xs">K</span>
								</div>
								<span>ABC Studio</span>
							</div>
							<ChevronDown className="w-4 h-4 text-gray-500" />
						</div>
					</div>

					<div className="py-2">
						<Link
							to="/dashboard"
							className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
						>
							<LayoutDashboard className="w-4 h-4 mr-2 text-gray-500" />
							<span>Dashboard</span>
						</Link>
						<Link
							to="/inbox"
							className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
						>
							<Inbox className="w-4 h-4 mr-2 text-gray-500" />
							<span>Inbox</span>
						</Link>
						<Link
							to="/teams"
							className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
						>
							<Users className="w-4 h-4 mr-2 text-gray-500" />
							<span>Teams</span>
						</Link>
						<Link
							to="/assigned-to-me"
							className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
						>
							<div className="w-4 h-4 mr-2 flex items-center justify-center">
								<div className="w-2 h-2 rounded-full bg-gray-500"></div>
							</div>
							<span>Assigned to me</span>
						</Link>
						<Link
							to="/created-by-me"
							className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
						>
							<div className="w-4 h-4 mr-2 flex items-center justify-center">
								<div className="w-2 h-2 rounded-full bg-gray-500"></div>
							</div>
							<span>Created by me</span>
						</Link>
					</div>

					<div className="py-2 border-t border-gray-200">
						<div className="flex items-center justify-between px-4 py-2 text-sm">
							<div className="flex items-center">
								<ChevronDown className="w-4 h-4 mr-1 text-gray-500" />
								<span>Favorites</span>
							</div>
							<div className="flex items-center">
								<MoreHorizontal className="w-4 h-4 text-gray-400" />
								<Plus className="w-4 h-4 text-gray-400 ml-1" />
							</div>
						</div>
					</div>

					<div className="py-2 border-t border-gray-200">
						<div className="flex items-center justify-between px-4 py-2 text-sm">
							<div className="flex items-center">
								<ChevronDown className="w-4 h-4 mr-1 text-gray-500" />
								<span>Projects</span>
							</div>
							<div className="flex items-center">
								<MoreHorizontal className="w-4 h-4 text-gray-400" />
								<Plus className="w-4 h-4 text-gray-400 ml-1" />
							</div>
						</div>
						<div className="pl-4">
							<div className="flex items-center px-4 py-1 text-sm bg-gray-100">
								<span className="text-xs mr-2">☰</span>
								<span>CRM Dashboard</span>
							</div>
							<div className="flex items-center px-4 py-1 text-sm">
								<span className="text-xs mr-2">☰</span>
								<span>Trust - SaaS Dashboard</span>
							</div>
							<div className="flex items-center px-4 py-1 text-sm">
								<span className="text-xs mr-2">☰</span>
								<span>Pertamina Project</span>
							</div>
							<div className="flex items-center px-4 py-1 text-sm">
								<span className="text-xs mr-2">☰</span>
								<span>Garuda Project</span>
							</div>
						</div>
					</div>

					<div className="mt-auto border-t border-gray-200 pt-2 absolute bottom-0 w-60">
						<Link
							to="/new"
							className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
						>
							<Button
								variant="ghost"
								size="sm"
								className="w-full justify-start p-0"
							>
								<Plus className="w-4 h-4 mr-2" />
								<span>New</span>
							</Button>
						</Link>
						<Link
							to="/settings"
							className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
						>
							<Settings className="w-4 h-4 mr-2 text-gray-500" />
							<span>Settings</span>
						</Link>
						<Link
							to="/help-center"
							className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
						>
							<div className="w-4 h-4 mr-2 text-gray-500">?</div>
							<span>Help Center</span>
						</Link>
						<div className="flex items-center px-4 py-2 text-sm">
							<Avatar className="w-6 h-6 mr-2">
								<AvatarImage src="/placeholder-user.jpg" />
								<AvatarFallback>DR</AvatarFallback>
							</Avatar>
							<div className="flex flex-col">
								<span className="text-xs font-medium">Darlene Robertson</span>
								<span className="text-xs text-gray-500">darlene@gmail.com</span>
							</div>
							<ChevronDown className="w-4 h-4 ml-auto text-gray-500" />
						</div>
					</div>
				</div>

				{/* Main content */}
				<div className="flex-1 overflow-auto">
					{/* Tabs */}
					<div className="border-b border-gray-200">
						<div className="flex items-center px-4">
							<Tabs defaultValue="spreadsheet" className="w-full">
								<TabsList className="bg-transparent h-auto p-0">
									<TabsTrigger
										value="spreadsheet"
										className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-4 py-3"
									>
										<span className="text-blue-600 mr-2">☰</span> Spreadsheet
									</TabsTrigger>
									<TabsTrigger
										value="timeline"
										className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-4 py-3"
									>
										<span className="mr-2">≡</span> Timeline
									</TabsTrigger>
									<TabsTrigger
										value="calendar"
										className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-4 py-3"
									>
										<span className="mr-2">📅</span> Calendar
									</TabsTrigger>
									<TabsTrigger
										value="board"
										className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-4 py-3"
									>
										<span className="mr-2">⊞</span> Board
									</TabsTrigger>
								</TabsList>
								<Button variant="ghost" size="icon" className="ml-2">
									<Plus className="w-4 h-4" />
								</Button>
							</Tabs>
							<div className="ml-auto flex items-center gap-2">
								<div className="relative">
									<Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
									<input
										type="text"
										placeholder="Search task..."
										className="pl-9 pr-4 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									/>
								</div>
								<Button
									variant="outline"
									size="sm"
									className="flex items-center gap-1"
								>
									<Filter className="w-4 h-4" />
									<span>Filter</span>
								</Button>
								<Button variant="ghost" size="icon">
									<MoreHorizontal className="w-4 h-4" />
								</Button>
							</div>
						</div>
					</div>

					{/* Task list */}
					<div className="p-4">
						{/* In Progress Section */}
						<div className="mb-8">
							<div className="flex items-center mb-2">
								<div className="flex items-center">
									<ChevronDown className="w-4 h-4 text-gray-500 mr-2" />
									<Badge
										variant="outline"
										className="bg-amber-50 text-amber-700 border-amber-200 rounded-md px-2 py-0.5 text-xs font-medium"
									>
										<span className="mr-1">⬤</span> In Progress
									</Badge>
								</div>
								<MoreHorizontal className="w-4 h-4 text-gray-400 ml-2" />
								<Badge
									variant="outline"
									className="ml-2 bg-gray-100 text-gray-700 border-gray-200 rounded-full px-2 py-0.5 text-xs"
								>
									2
								</Badge>
							</div>

							<div className="bg-white rounded-md">
								<table className="w-full text-sm">
									<thead>
										<tr className="border-b border-gray-200">
											<th className="text-left font-medium p-2 w-1/4">Task</th>
											<th className="text-left font-medium p-2 w-1/4">
												Description
											</th>
											<th className="text-left font-medium p-2 w-1/12">
												Assignee
											</th>
											<th className="text-left font-medium p-2 w-1/12">
												Due Date
											</th>
											<th className="text-left font-medium p-2 w-1/12">
												Priority
											</th>
											<th className="text-left font-medium p-2 w-1/6">
												Progress
											</th>
											<th className="text-left font-medium p-2 w-1/12">
												Created
											</th>
											<th className="w-10"></th>
										</tr>
									</thead>
									<tbody>
										{/* Wireframing parent row */}
										<tr className="border-b border-gray-100 hover:bg-gray-50">
											<td className="p-2">
												<div className="flex items-center">
													<ChevronDown className="w-4 h-4 text-gray-400 mr-2" />
													<div className="flex items-center gap-1">
														<Checkbox id="wireframing" />
														<span>Wireframing</span>
													</div>
												</div>
											</td>
											<td className="p-2">-</td>
											<td className="p-2">
												<div className="flex -space-x-2">
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-purple-500 text-white text-xs">
															AB
														</AvatarFallback>
													</Avatar>
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-gray-500 text-white text-xs">
															TT
														</AvatarFallback>
													</Avatar>
												</div>
											</td>
											<td className="p-2 text-xs">February 12, 2024</td>
											<td className="p-2">
												<Badge className="bg-red-50 text-red-700 border-red-200 rounded-md px-2 py-0.5 text-xs">
													Urgent
												</Badge>
											</td>
											<td className="p-2">
												<Progress value={85} className="h-2" />
												<span className="text-xs text-gray-500">85%</span>
											</td>
											<td className="p-2">
												<Avatar className="w-6 h-6">
													<AvatarFallback className="bg-blue-500 text-white text-xs">
														JD
													</AvatarFallback>
												</Avatar>
											</td>
											<td className="p-2">
												<MoreHorizontal className="w-4 h-4 text-gray-400" />
											</td>
										</tr>

										{/* Dashboard subtask */}
										<tr className="border-b border-gray-100 hover:bg-gray-50">
											<td className="p-2">
												<div className="flex items-center pl-6">
													<div className="flex items-center gap-1">
														<Checkbox id="dashboard" checked />
														<span>Dashboard</span>
													</div>
												</div>
											</td>
											<td className="p-2 text-xs">
												Create wireframe for Dashboard page
											</td>
											<td className="p-2">
												<div className="flex -space-x-2">
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-red-500 text-white text-xs">
															AB
														</AvatarFallback>
													</Avatar>
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-yellow-500 text-white text-xs">
															CD
														</AvatarFallback>
													</Avatar>
												</div>
											</td>
											<td className="p-2 text-xs">February 12, 2024</td>
											<td className="p-2">
												<Badge className="bg-red-50 text-red-700 border-red-200 rounded-md px-2 py-0.5 text-xs">
													Urgent
												</Badge>
											</td>
											<td className="p-2">
												<Progress value={95} className="h-2" />
												<span className="text-xs text-gray-500">95%</span>
											</td>
											<td className="p-2">
												<Avatar className="w-6 h-6">
													<AvatarFallback className="bg-blue-500 text-white text-xs">
														JD
													</AvatarFallback>
												</Avatar>
											</td>
											<td className="p-2">
												<MoreHorizontal className="w-4 h-4 text-gray-400" />
											</td>
										</tr>

										{/* Analytics subtask */}
										<tr className="border-b border-gray-100 hover:bg-gray-50">
											<td className="p-2">
												<div className="flex items-center pl-6">
													<div className="flex items-center gap-1">
														<Checkbox id="analytics" checked />
														<span>Analytics</span>
													</div>
												</div>
											</td>
											<td className="p-2 text-xs">
												Create wireframe for analytics page
											</td>
											<td className="p-2">
												<div className="flex -space-x-2">
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-purple-500 text-white text-xs">
															AB
														</AvatarFallback>
													</Avatar>
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-gray-500 text-white text-xs">
															TT
														</AvatarFallback>
													</Avatar>
												</div>
											</td>
											<td className="p-2 text-xs">February 12, 2024</td>
											<td className="p-2">
												<Badge className="bg-red-50 text-red-700 border-red-200 rounded-md px-2 py-0.5 text-xs">
													Urgent
												</Badge>
											</td>
											<td className="p-2">
												<Progress value={100} className="h-2" />
												<span className="text-xs text-gray-500">100%</span>
											</td>
											<td className="p-2">
												<Avatar className="w-6 h-6">
													<AvatarFallback className="bg-blue-500 text-white text-xs">
														JD
													</AvatarFallback>
												</Avatar>
											</td>
											<td className="p-2">
												<MoreHorizontal className="w-4 h-4 text-gray-400" />
											</td>
										</tr>

										{/* Messages subtask */}
										<tr className="border-b border-gray-100 hover:bg-gray-50">
											<td className="p-2">
												<div className="flex items-center pl-6">
													<div className="flex items-center gap-1">
														<Checkbox id="messages" />
														<span>Messages</span>
													</div>
												</div>
											</td>
											<td className="p-2 text-xs">
												Create wireframe for messages page
											</td>
											<td className="p-2">
												<div className="flex -space-x-2">
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-teal-500 text-white text-xs">
															AB
														</AvatarFallback>
													</Avatar>
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-gray-500 text-white text-xs">
															TT
														</AvatarFallback>
													</Avatar>
												</div>
											</td>
											<td className="p-2 text-xs">February 12, 2024</td>
											<td className="p-2">
												<Badge className="bg-blue-50 text-blue-700 border-blue-200 rounded-md px-2 py-0.5 text-xs">
													Normal
												</Badge>
											</td>
											<td className="p-2">
												<Progress value={34} className="h-2" />
												<span className="text-xs text-gray-500">34%</span>
											</td>
											<td className="p-2">
												<Avatar className="w-6 h-6">
													<AvatarFallback className="bg-blue-500 text-white text-xs">
														JD
													</AvatarFallback>
												</Avatar>
											</td>
											<td className="p-2">
												<MoreHorizontal className="w-4 h-4 text-gray-400" />
											</td>
										</tr>

										{/* Hi-Fi Design parent row */}
										<tr className="border-b border-gray-100 hover:bg-gray-50">
											<td className="p-2">
												<div className="flex items-center">
													<ChevronDown className="w-4 h-4 text-gray-400 mr-2" />
													<div className="flex items-center gap-1">
														<Checkbox id="hifi" />
														<span>Hi-Fi Design</span>
													</div>
												</div>
											</td>
											<td className="p-2">Create hi-fi design 3 main screen</td>
											<td className="p-2">
												<div className="flex -space-x-2">
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-purple-500 text-white text-xs">
															AB
														</AvatarFallback>
													</Avatar>
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-gray-500 text-white text-xs">
															TT
														</AvatarFallback>
													</Avatar>
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-pink-500 text-white text-xs">
															CD
														</AvatarFallback>
													</Avatar>
												</div>
											</td>
											<td className="p-2 text-xs">February 14, 2024</td>
											<td className="p-2">
												<Badge className="bg-gray-50 text-gray-700 border-gray-200 rounded-md px-2 py-0.5 text-xs">
													Low
												</Badge>
											</td>
											<td className="p-2">
												<Progress value={20} className="h-2" />
												<span className="text-xs text-gray-500">20%</span>
											</td>
											<td className="p-2">
												<Avatar className="w-6 h-6">
													<AvatarFallback className="bg-blue-500 text-white text-xs">
														JD
													</AvatarFallback>
												</Avatar>
											</td>
											<td className="p-2">
												<MoreHorizontal className="w-4 h-4 text-gray-400" />
											</td>
										</tr>

										{/* Add more rows for Hi-Fi Design subtasks */}
										<tr>
											<td colSpan={8} className="p-2">
												<Button
													variant="ghost"
													className="w-full justify-start text-gray-500 text-sm"
												>
													<Plus className="w-4 h-4 mr-2" />
													Add task
												</Button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						{/* Ready to check by PM Section */}
						<div className="mb-8">
							<div className="flex items-center mb-2">
								<div className="flex items-center">
									<ChevronDown className="w-4 h-4 text-gray-500 mr-2" />
									<Badge
										variant="outline"
										className="bg-purple-50 text-purple-700 border-purple-200 rounded-md px-2 py-0.5 text-xs font-medium"
									>
										<span className="mr-1">⬤</span> Ready to check by PM
									</Badge>
								</div>
								<MoreHorizontal className="w-4 h-4 text-gray-400 ml-2" />
								<Badge
									variant="outline"
									className="ml-2 bg-gray-100 text-gray-700 border-gray-200 rounded-full px-2 py-0.5 text-xs"
								>
									2
								</Badge>
							</div>

							<div className="bg-white rounded-md">
								<table className="w-full text-sm">
									<thead>
										<tr className="border-b border-gray-200">
											<th className="text-left font-medium p-2 w-1/4">Task</th>
											<th className="text-left font-medium p-2 w-1/4">
												Description
											</th>
											<th className="text-left font-medium p-2 w-1/12">
												Assignee
											</th>
											<th className="text-left font-medium p-2 w-1/12">
												Due Date
											</th>
											<th className="text-left font-medium p-2 w-1/12">
												Priority
											</th>
											<th className="text-left font-medium p-2 w-1/6">
												Progress
											</th>
											<th className="text-left font-medium p-2 w-1/12">
												Created
											</th>
											<th className="w-10"></th>
										</tr>
									</thead>
									<tbody>
										{/* Wireframing parent row */}
										<tr className="border-b border-gray-100 hover:bg-gray-50">
											<td className="p-2">
												<div className="flex items-center">
													<ChevronDown className="w-4 h-4 text-gray-400 mr-2" />
													<div className="flex items-center gap-1">
														<Checkbox id="wireframing2" checked />
														<span>Wireframing</span>
													</div>
												</div>
											</td>
											<td className="p-2">-</td>
											<td className="p-2">
												<div className="flex -space-x-2">
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-purple-500 text-white text-xs">
															AB
														</AvatarFallback>
													</Avatar>
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-gray-500 text-white text-xs">
															TT
														</AvatarFallback>
													</Avatar>
												</div>
											</td>
											<td className="p-2 text-xs">February 8, 2024</td>
											<td className="p-2">
												<Badge className="bg-red-50 text-red-700 border-red-200 rounded-md px-2 py-0.5 text-xs">
													Urgent
												</Badge>
											</td>
											<td className="p-2">
												<Progress value={100} className="h-2" />
												<span className="text-xs text-gray-500">100%</span>
											</td>
											<td className="p-2">
												<Avatar className="w-6 h-6">
													<AvatarFallback className="bg-blue-500 text-white text-xs">
														JD
													</AvatarFallback>
												</Avatar>
											</td>
											<td className="p-2">
												<MoreHorizontal className="w-4 h-4 text-gray-400" />
											</td>
										</tr>

										{/* Onboarding subtask */}
										<tr className="border-b border-gray-100 hover:bg-gray-50">
											<td className="p-2">
												<div className="flex items-center pl-6">
													<div className="flex items-center gap-1">
														<Checkbox id="onboarding" checked />
														<span>Onboarding</span>
													</div>
												</div>
											</td>
											<td className="p-2">-</td>
											<td className="p-2">
												<div className="flex -space-x-2">
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-red-500 text-white text-xs">
															AB
														</AvatarFallback>
													</Avatar>
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-yellow-500 text-white text-xs">
															CD
														</AvatarFallback>
													</Avatar>
												</div>
											</td>
											<td className="p-2 text-xs">February 8, 2024</td>
											<td className="p-2">
												<Badge className="bg-red-50 text-red-700 border-red-200 rounded-md px-2 py-0.5 text-xs">
													Urgent
												</Badge>
											</td>
											<td className="p-2">
												<Progress value={95} className="h-2" />
												<span className="text-xs text-gray-500">95%</span>
											</td>
											<td className="p-2">
												<Avatar className="w-6 h-6">
													<AvatarFallback className="bg-blue-500 text-white text-xs">
														JD
													</AvatarFallback>
												</Avatar>
											</td>
											<td className="p-2">
												<MoreHorizontal className="w-4 h-4 text-gray-400" />
											</td>
										</tr>

										{/* Login Screen subtask */}
										<tr className="border-b border-gray-100 hover:bg-gray-50">
											<td className="p-2">
												<div className="flex items-center pl-6">
													<div className="flex items-center gap-1">
														<Checkbox id="login" checked />
														<span>Login Screen</span>
													</div>
												</div>
											</td>
											<td className="p-2">-</td>
											<td className="p-2">
												<div className="flex -space-x-2">
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-purple-500 text-white text-xs">
															AB
														</AvatarFallback>
													</Avatar>
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-gray-500 text-white text-xs">
															TT
														</AvatarFallback>
													</Avatar>
												</div>
											</td>
											<td className="p-2 text-xs">February 8, 2024</td>
											<td className="p-2">
												<Badge className="bg-red-50 text-red-700 border-red-200 rounded-md px-2 py-0.5 text-xs">
													Urgent
												</Badge>
											</td>
											<td className="p-2">
												<Progress value={100} className="h-2" />
												<span className="text-xs text-gray-500">100%</span>
											</td>
											<td className="p-2">
												<Avatar className="w-6 h-6">
													<AvatarFallback className="bg-blue-500 text-white text-xs">
														JD
													</AvatarFallback>
												</Avatar>
											</td>
											<td className="p-2">
												<MoreHorizontal className="w-4 h-4 text-gray-400" />
											</td>
										</tr>

										{/* Sign Up Screen subtask */}
										<tr className="border-b border-gray-100 hover:bg-gray-50">
											<td className="p-2">
												<div className="flex items-center pl-6">
													<div className="flex items-center gap-1">
														<Checkbox id="signup" checked />
														<span>Sign Up Screen</span>
													</div>
												</div>
											</td>
											<td className="p-2">-</td>
											<td className="p-2">
												<div className="flex -space-x-2">
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-teal-500 text-white text-xs">
															AB
														</AvatarFallback>
													</Avatar>
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-gray-500 text-white text-xs">
															TT
														</AvatarFallback>
													</Avatar>
												</div>
											</td>
											<td className="p-2 text-xs">February 8, 2024</td>
											<td className="p-2">
												<Badge className="bg-blue-50 text-blue-700 border-blue-200 rounded-md px-2 py-0.5 text-xs">
													Normal
												</Badge>
											</td>
											<td className="p-2">
												<Progress value={95} className="h-2" />
												<span className="text-xs text-gray-500">95%</span>
											</td>
											<td className="p-2">
												<Avatar className="w-6 h-6">
													<AvatarFallback className="bg-blue-500 text-white text-xs">
														JD
													</AvatarFallback>
												</Avatar>
											</td>
											<td className="p-2">
												<MoreHorizontal className="w-4 h-4 text-gray-400" />
											</td>
										</tr>

										{/* Hi-Fi Design parent row */}
										<tr className="border-b border-gray-100 hover:bg-gray-50">
											<td className="p-2">
												<div className="flex items-center">
													<ChevronDown className="w-4 h-4 text-gray-400 mr-2" />
													<div className="flex items-center gap-1">
														<Checkbox id="hifi2" checked />
														<span>Hi-Fi Design</span>
													</div>
												</div>
											</td>
											<td className="p-2">-</td>
											<td className="p-2">
												<div className="flex -space-x-2">
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-red-500 text-white text-xs">
															AB
														</AvatarFallback>
													</Avatar>
													<Avatar className="w-6 h-6 border-2 border-white">
														<AvatarFallback className="bg-yellow-500 text-white text-xs">
															CD
														</AvatarFallback>
													</Avatar>
												</div>
											</td>
											<td className="p-2 text-xs">February 9, 2024</td>
											<td className="p-2">
												<Badge className="bg-gray-50 text-gray-700 border-gray-200 rounded-md px-2 py-0.5 text-xs">
													Low
												</Badge>
											</td>
											<td className="p-2">
												<Progress value={100} className="h-2" />
												<span className="text-xs text-gray-500">100%</span>
											</td>
											<td className="p-2">
												<Avatar className="w-6 h-6">
													<AvatarFallback className="bg-blue-500 text-white text-xs">
														JD
													</AvatarFallback>
												</Avatar>
											</td>
											<td className="p-2">
												<MoreHorizontal className="w-4 h-4 text-gray-400" />
											</td>
										</tr>

										{/* Add more rows for Hi-Fi Design subtasks */}
										<tr>
											<td colSpan={8} className="p-2">
												<Button
													variant="ghost"
													className="w-full justify-start text-gray-500 text-sm"
												>
													<Plus className="w-4 h-4 mr-2" />
													Add task
												</Button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
