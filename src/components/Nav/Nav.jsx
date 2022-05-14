import { useState } from 'react';

import Link from './Link';

const Nav = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const genericHamburgerLineClass = 'block h-0.5';

	return (
		<nav className="sticky top-0 z-50 nav-bar border-gray-200 px-2 sm:px-4 py-2.5 rounded shadow-lg">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<a href="#home" className="flex flex-col text-left transition ease-in-out delay-150 hover:text-white duration-200">
					Home
				</a>
				<div className="MOBILE-NAV flex lg:hidden">
					<div className="HAMBURGER-ICON space-y-2" onClick={() => setIsNavOpen(true)}>
						<span className={`w-8 ${genericHamburgerLineClass}`} />
						<span className={`w-6 ${genericHamburgerLineClass}`} />
						<span className={`w-4 ${genericHamburgerLineClass}`} />
					</div>

					<div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
						<div
							className="absolute top-0 right-0 px-8 py-8"
							onClick={() => setIsNavOpen(false)}
						>
							<svg
								style={{ color: 'rgb(130, 111, 102)' }}
								className="h-8 w-8"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						</div>
						<ul className="flex flex-col items-center justify-between min-h-[250px]">
							<li className="my-8 uppercase">
								<a href="#about" onClick={() => setIsNavOpen(false)}>
									About
								</a>
							</li>
							<li className="my-8 uppercase">
								<a href="#experience" onClick={() => setIsNavOpen(false)}>
									Experience
								</a>
							</li>
							<li className="my-8 uppercase">
								<a href="#contact" onClick={() => setIsNavOpen(false)}>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="DESKTOP-NAV hidden w-full lg:block lg:w-auto">
					<ul className="flex flex-col text-right md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium">
						<Link link={"about"} />
						<Link link={"experience"} />
						<Link link={"contact"} />
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
