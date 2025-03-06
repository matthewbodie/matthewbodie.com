import React, { useState } from "react";
import { myName } from "../data";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const NavLinks = ({ onClick = () => {} }) => (
		<>
			<a
				href="/"
				className="text-gray-800 hover:text-gray-600 transition duration-300"
				onClick={onClick}
			>
				Home
			</a>
			<a
				href="/about"
				className="text-gray-800 hover:text-gray-600 transition duration-300"
				onClick={onClick}
			>
				About
			</a>
			<a
				href="/cv"
				className="text-gray-800 hover:text-gray-600 transition duration-300"
				onClick={onClick}
			>
				CV
			</a>
			<a
				href="/teaching"
				className="text-gray-800 hover:text-gray-600 transition duration-300"
				onClick={onClick}
			>
				Teaching
			</a>
			<a
				href="/philosophy"
				className="text-gray-800 hover:text-gray-600 transition duration-300"
				onClick={onClick}
			>
				Philosophy Statements
			</a>
			<a
				href="/personal"
				className="text-gray-800 hover:text-gray-600 transition duration-300"
				onClick={onClick}
			>
				Personal
			</a>
		</>
	);

	return (
		<nav className="py-4 px-4 md:px-12">
			<div className="mx-auto flex justify-between items-center">
				<a className="text-xl font-bold" href="/">
					{myName}
				</a>

				{/* Desktop Navigation */}
				<div className="hidden md:flex space-x-8">
					<NavLinks />
				</div>

				{/* Mobile menu using Sheet from shadcn */}
				<div className="md:hidden">
					<Sheet>
						<SheetTrigger
							className="text-gray-800 focus:outline-none"
							aria-label="Toggle menu"
						>
							<Menu className="w-6 h-6" />
						</SheetTrigger>
						<SheetContent side="right" className="py-8 px-6">
							<div className="flex flex-col space-y-6 mt-6">
								<NavLinks
									onClick={() => setIsMenuOpen(false)}
								/>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
