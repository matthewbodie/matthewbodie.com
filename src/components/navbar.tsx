import React, { useState } from "react";
import { myName } from "../data";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="py-4 px-4 md:px-12">
			<div className="mx-auto flex justify-between items-center">
				<a className="text-xl font-bold" href="/">
					{myName}
				</a>

				{/* Desktop Navigation */}
				<div className="hidden md:flex space-x-8">
					<a
						href="/"
						className="text-gray-800 hover:text-gray-600 transition duration-300"
					>
						Home
					</a>
					<a
						href="/about"
						className="text-gray-800 hover:text-gray-600 transition duration-300"
					>
						About
					</a>
					<a
						href="/cv"
						className="text-gray-800 hover:text-gray-600 transition duration-300"
					>
						CV
					</a>
					<a
						href="/teaching"
						className="text-gray-800 hover:text-gray-600 transition duration-300"
					>
						Teaching
					</a>
					<a
						href="/philosophy"
						className="text-gray-800 hover:text-gray-600 transition duration-300"
					>
						Philosophy Statements
					</a>
					<a
						href="/personal"
						className="text-gray-800 hover:text-gray-600 transition duration-300"
					>
						Personal
					</a>
				</div>

				{/* Mobile menu button */}
				<div className="md:hidden">
					<button
						onClick={toggleMenu}
						className="text-gray-800 focus:outline-none"
						aria-label="Toggle menu"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							{isMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="md:hidden fixed inset-x-0 top-[72px] bg-white py-2 px-4 shadow-md z-50">
					<div className="flex flex-col space-y-3">
						<a
							href="/"
							className="text-gray-800 hover:text-gray-600 transition duration-300 py-2"
							onClick={toggleMenu}
						>
							Home
						</a>
						<a
							href="/about"
							className="text-gray-800 hover:text-gray-600 transition duration-300 py-2"
							onClick={toggleMenu}
						>
							About
						</a>
						<a
							href="/cv"
							className="text-gray-800 hover:text-gray-600 transition duration-300 py-2"
							onClick={toggleMenu}
						>
							CV
						</a>
						<a
							href="/teaching"
							className="text-gray-800 hover:text-gray-600 transition duration-300 py-2"
							onClick={toggleMenu}
						>
							Teaching
						</a>
						<a
							href="/philosophy"
							className="text-gray-800 hover:text-gray-600 transition duration-300 py-2"
							onClick={toggleMenu}
						>
							Philosophy Statements
						</a>
						<a
							href="/personal"
							className="text-gray-800 hover:text-gray-600 transition duration-300 py-2"
							onClick={toggleMenu}
						>
							Personal
						</a>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
