import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DS_LINKS } from '@/constants/const';
import useAuth from '@/hooks/useAuth';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Collapsible } from '@radix-ui/react-collapsible';
import { AxiosError } from 'axios';
import { ChevronsUpDown, CircleUser, FileQuestion, Github, Home, Moon, Pyramid, RectangleEllipsis, Sun } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as z from 'zod';
import { LoadingButton } from './LoadingButton';
import { Logo } from './Logo';
import { PasswordInput } from './PasswordInput';
import { useTheme } from './ThemeProvider';
import { errorToast, successToast } from './Toasts';
import { CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export default function Navbar() {
	const { user } = useAuth();
	const { setTheme } = useTheme();
	const isDesktop = useMediaQuery('(min-width: 768px)');
	const [isOpen, setIsOpen] = useState(false);
	const sheetStyle = 'font-medium text-xl border rounded-md p-2 text-center flex flex-row items-center justify-center gap-1';

	return (
		<header className="bg-background sticky z-20 flex h-20 items-center px-6 border-b-2 top-0">
			<div className="flex grow">
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							{isDesktop ? (
								<Link to="/" className={navigationMenuTriggerStyle()}>
									<Logo className="fill-black dark:fill-white size-8" />
								</Link>
							) : (
								<Sheet open={isOpen} onOpenChange={setIsOpen}>
									<SheetTrigger>
										<div className={navigationMenuTriggerStyle()}>
											<Logo className="fill-black dark:fill-white size-8" />
										</div>
									</SheetTrigger>
									<SheetContent side="left">
										<div className="flex flex-col gap-2 mr-4">
											<Link to="/" onClick={() => setIsOpen(false)}>
												<div className={sheetStyle}>
													<Home />
													Home
												</div>
											</Link>
											<Collapsible className="w-full">
												<CollapsibleTrigger className={cn(sheetStyle, 'w-full flex flex-row items-center justify-center')}>
													<Pyramid />
													Data Structures
													<ChevronsUpDown className="size-4" />
												</CollapsibleTrigger>
												<CollapsibleContent className="mt-2">
													<ul className="flex flex-col gap-2 justify-center items-center">
														{DS_LINKS.map((component) => (
															<li className={cn(sheetStyle, 'w-5/6')} key={component.title}>
																<Link to={component.href} onClick={() => setIsOpen(false)}>
																	{component.title}
																</Link>
															</li>
														))}
													</ul>
												</CollapsibleContent>
											</Collapsible>
											<Link to="/quizzes" onClick={() => setIsOpen(false)}>
												<div className={sheetStyle}>
													<FileQuestion />
													Quizzes
												</div>
											</Link>
											<Link to="/flashcards" onClick={() => setIsOpen(false)}>
												<div className={sheetStyle}>
													<RectangleEllipsis />
													Flaschards
												</div>
											</Link>
										</div>
									</SheetContent>
								</Sheet>
							)}
						</NavigationMenuItem>
						<NavigationMenuItem className="md:block hidden">
							<NavigationMenuTrigger>Data Structures</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid gap-3 p-4 md:grid-cols-2 md:w-[400px] grid-cols-1 w-[200px] text-center">
									{DS_LINKS.map((component) => (
										<ListItem key={component.title} href={component.href}>
											{component.title}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem className="md:block hidden">
							<Link to="/quizzes" className={navigationMenuTriggerStyle()}>
								Quizzes
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem className="md:block hidden">
							<Link to="/flashcards" className={navigationMenuTriggerStyle()}>
								Flashcards
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
			<div className="flex flex-row gap-2">
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline" className="px-2">
							<CircleUser className="md:mr-2 mr-0" />
							<p className="collapse size-0 md:visible md:size-auto">Account</p>
						</Button>
					</DialogTrigger>
					<DialogContent className="w-[400px]">
						<DialogTitle className="text-3xl m-0">Account</DialogTitle>
						{user ? <AuthenticatedComponent /> : <NotAuthenticatedComponent />}
					</DialogContent>
				</Dialog>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" size="icon">
							<Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<a href="https://github.com/v4n00/LinkNLearn">
					<Button variant="outline" size="icon">
						<Github />
					</Button>
				</a>
			</div>
		</header>
	);
}

const AuthenticatedComponent = () => {
	const { user, logOut } = useAuth();

	return (
		<>
			<DialogHeader>
				<div className="flex items-center gap-3">
					<Avatar className="h-12 w-12">
						<AvatarFallback>{user?.email?.charAt(0)?.toUpperCase()}</AvatarFallback>
					</Avatar>
					<div className="grid gap-0.5 text-xs">
						<div className=" text-base">You are logged in as:</div>
						<div className="text-sm text-gray-500">{user?.email}</div>
					</div>
				</div>
			</DialogHeader>
			<DialogFooter>
				<Button
					className="w-full"
					type="submit"
					onClick={() => {
						logOut();
						successToast('Logged out successfully');
					}}
				>
					Log Out
				</Button>
			</DialogFooter>
		</>
	);
};

const NotAuthenticatedComponent = () => {
	const [tab, setTab] = useState<string>('logIn');

	const onTabChange = (value: string) => {
		setTab(value);
	};

	return (
		<Tabs value={tab} onValueChange={onTabChange} defaultValue="logIn">
			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="logIn">Log in</TabsTrigger>
				<TabsTrigger value="signUp">Sign up</TabsTrigger>
			</TabsList>
			<TabsContent value="logIn">
				<LogInComponent />
			</TabsContent>
			<TabsContent value="signUp">
				<SignUpComponent changeTab={onTabChange} />
			</TabsContent>
		</Tabs>
	);
};

const SignUpComponent = ({ changeTab }: { changeTab: (value: string) => void }) => {
	const { signUp, loading } = useAuth();

	const signUpFormSchema = z
		.object({
			email: z.string().email(),
			password: z.string().min(8, 'Password must contain at least 8 characters').max(32, 'Password must contain at most 32 characters'),
			confirmPassword: z.string().min(8, 'Password must contain at least 8 characters').max(32, 'Password must contain at most 32 characters'),
		})
		.refine((data) => data.password === data.confirmPassword, {
			message: "Passwords don't match",
			path: ['confirmPassword'],
		});

	const form = useForm<z.infer<typeof signUpFormSchema>>({
		resolver: zodResolver(signUpFormSchema),
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	async function onSubmit(values: z.infer<typeof signUpFormSchema>) {
		try {
			await signUp(values);
			successToast('Signed up successfully');
			changeTab('logIn');
		} catch (error) {
			if (error instanceof AxiosError && error.response) {
				errorToast(error.response.data);
			}
		}
	}

	return (
		<Card>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 pt-6">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<PasswordInput {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Confirm Password</FormLabel>
									<FormControl>
										<PasswordInput {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<LoadingButton loading={loading} type="submit" className="w-full">
							Sign up
						</LoadingButton>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

const LogInComponent = () => {
	const { login, loading } = useAuth();

	const logInFormSchema = z.object({
		email: z.string().email().or(z.literal('admin')),
		password: z.string(),
	});

	const form = useForm<z.infer<typeof logInFormSchema>>({
		resolver: zodResolver(logInFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	async function onSubmit(values: z.infer<typeof logInFormSchema>) {
		try {
			await login(values);
			successToast('Logged in successfully');
		} catch (error) {
			if (error instanceof AxiosError && error.response) {
				errorToast(error.response.data);
			}
		}
	}

	return (
		<Card>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 pt-6">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<PasswordInput {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<LoadingButton loading={loading} type="submit" className="w-full">
							Log in
						</LoadingButton>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

const ListItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
	return (
		<li>
			<Link to={href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
				<div className="text-sm font-medium leading-none">{children}</div>
			</Link>
		</li>
	);
};
