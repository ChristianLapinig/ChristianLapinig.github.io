import Link from './Link';

const Nav = () => (
	<nav className="nav-bar border-gray-200 px-2 sm:px-4 py-2.5 rounded shadow-lg">
		<div className="container flex flex-wrap justify-between items-center mx-auto">
			<a href="#home" className="flex flex-col text-left transition ease-in-out delay-150 hover:text-white duration-200">
				Home
			</a>
			<div className="hidden w-full md:block md:w-auto">
				<ul className="flex flex-col text-right md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium">
					<Link link={"about"} />
					<Link link={"experience"} />
					<Link link={"contact"} />
				</ul>
			</div>
		</div>
	</nav>
);

export default Nav;