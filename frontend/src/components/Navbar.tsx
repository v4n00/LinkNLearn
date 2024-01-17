import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { links } from '@/lib/const';
import { cn } from '@/lib/utils';
import React, { SVGProps } from 'react';
import { JSX } from 'react/jsx-runtime';

export default function Component() {
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
			<a href="/account">
				<Button variant="outline">Account</Button>
			</a>
		</header>
	);
}

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
