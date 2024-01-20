import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { APIURL, links } from '@/constants/const';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React, { Dispatch, SVGProps, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { JSX } from 'react/jsx-runtime';
import * as z from 'zod';
import { Button } from './ui/button';

export default function Component() {
	const [dialogOpen, dialogSetOpen] = useState(false);

	return (
		<header className="sticky z-20 flex h-20 w-full items-center px-4 md:px-6 bg-transparent border-b border-gray-200">
			<div>
				<a className={navigationMenuTriggerStyle()} href="/">
					<MountainIcon className="size-7" />
				</a>
			</div>
			<div className="flex w-full justify-center">
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Data Structures</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid gap-3 p-4 md:grid-cols-2 md:w-[400px] grid-cols-1 w-[200px]">
									{links.map((component) => (
										<ListItem key={component.title} href={component.href}>
											{component.title}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink href="/quizzes" className={navigationMenuTriggerStyle()}>
								Quizzes
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink href="/flashcards" className={navigationMenuTriggerStyle()}>
								Flashcards
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
			<Dialog open={dialogOpen} onOpenChange={dialogSetOpen}>
				<DialogTrigger asChild>
					<Button variant="outline">Account</Button>
				</DialogTrigger>
				<DialogContent className="w-[400px]">
					<DialogHeader>
						<DialogTitle className="text-3xl">Account</DialogTitle>
						<Tabs defaultValue="logIn">
							<TabsList className="grid w-full grid-cols-2">
								<TabsTrigger value="logIn">Log in</TabsTrigger>
								<TabsTrigger value="signUp">Sign up</TabsTrigger>
							</TabsList>
							<TabsContent value="logIn">
								<LogInComponent dialogSetOpen={dialogSetOpen} />
							</TabsContent>
							<TabsContent value="signUp">{/* <SignUpComponent /> */}</TabsContent>
						</Tabs>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</header>
	);
}

const LogInComponent = ({ dialogSetOpen }: { dialogSetOpen: Dispatch<SetStateAction<boolean>> }) => {
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

	function onSubmit(values: z.infer<typeof logInFormSchema>) {
		axios.post(`${APIURL}/user/login`, values).then((res) => {
			dialogSetOpen(false);
			console.log(res);
		});
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
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full">
							Log in
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({ className, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a ref={ref} className={cn('block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground', className)} {...props}>
					<div className="text-sm font-medium leading-none">{children}</div>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';
