import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="nav-bar border-gray-200 px-2 sm:px-4 py-2.5 rounded shadow-lg">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#home" className="text-left transition ease-in-out delay-150 hover:text-white duration-200">
            Home
          </a>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col text-right md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a 
                  href="#about" 
                  className="block py-2 pr-4 pl-3 transition ease-in-out delay-150 hover:text-white duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="block py-2 pr-4 pl-3 transition ease-in-out delay-150 hover:text-white duration-200"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="block py-2 pr-4 pl-3 transition ease-in-out delay-150 hover:text-white duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div> 
      </nav>

      <header id="home" className="w-full p-5 lg:w-3/5 lg:mx-auto md:mx-auto lg:p-20">
        <h1 className="text-xl lg:text-3xl md:text-2xl">Hi, World!</h1>
        <h2 className="text-2xl lg:text-7xl md:text-3xl font-bold pt-3">
          I'm Christian Lapinig
        </h2>

        <div className="header-intro">
          <p className="pt-8 text-base lg:text-xl md:text-xl">
            I'm a Software Developer who likes to solve everyday problems with code.
            Currently, I'm a Technical Support Engineer focused on resolving customer issues at&nbsp;
            <a 
              className="transition ease-in-out delay-150 text-red-400 hover:text-red-500" 
              href="https://www.adobe.com/"
              target="_blank"
              rel="noreferrer" 
            >
              Adobe
            </a>.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
