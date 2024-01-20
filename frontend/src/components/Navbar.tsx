import { signUp } from '@/api/authApi';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { links } from '@/constants/const';
import useAuth from '@/hooks/useAuth';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { Mountain } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Link } from './Link';
import { LoadingButton } from './LoadingButton';
import { PasswordInput } from './PasswordInput';
import { errorToast, successToast } from './Toasts';

export default function Navbar() {
	const { user } = useAuth();

	return (
		<header className="sticky z-20 flex h-20 w-full items-center px-4 md:px-6 bg-transparent border-b border-gray-200 bg-white">
			<div>
				<Link href="/" className={navigationMenuTriggerStyle()}>
					<Mountain className="size-7" />
				</Link>
			</div>
			<div className="flex w-full justify-center">
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Data Structures</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid gap-3 p-4 md:grid-cols-2 md:w-[400px] grid-cols-1 w-[200px]">
									{links.map((component) => (
										<ListItem key={component.title} href={component.href} className="">
											{component.title}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/quizzes" className={navigationMenuTriggerStyle()}>
								Quizzes
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/flashcards" className={navigationMenuTriggerStyle()}>
								Flashcards
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="outline">Account</Button>
				</DialogTrigger>
				<DialogContent className="w-[400px]">
					<DialogTitle className="text-3xl">Account</DialogTitle>
					{user ? <AuthenticatedComponent /> : <NotAuthenticatedComponent />}
				</DialogContent>
			</Dialog>
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
						<AvatarFallback>{user?.email?.at(0)?.toUpperCase()}</AvatarFallback>
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
	const { loading } = useAuth();

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

	useEffect(() => {}, [loading]);

	async function onSubmit(values: z.infer<typeof signUpFormSchema>) {
		try {
			await signUp(values);
			successToast('Logged in successfully');
			changeTab('logIn');
		} catch (error) {
			console.log(error);
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
						<LoadingButton type="submit" className="w-full">
							Sign up
						</LoadingButton>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

const LogInComponent = () => {
	const { login } = useAuth();

	const logInFormSchema = z.object({
		email: z.string().email(),
		password: z.string().min(8, 'Password must contain at least 8 characters').max(32, 'Password must contain at most 32 characters'),
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
						<LoadingButton type="submit" className="w-full">
							Log in
						</LoadingButton>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

const ListItem = ({ href, className, children }: { href: string; className: string; children: React.ReactNode }) => {
	return (
		<li>
			<Link href={href} className={cn('block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground', className)}>
				<div className="text-sm font-medium leading-none">{children}</div>
			</Link>
		</li>
	);
};
