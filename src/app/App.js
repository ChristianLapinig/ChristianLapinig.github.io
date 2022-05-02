import './App.css';

function App() {
  return (
    <div className="App">
      <div className="w-full p-5 lg:w-3/5 lg:mx-auto md:mx-auto lg:p-10">
        <header>
          <h1 className="text-xl lg:text-3xl md:text-2xl">Hi, World!</h1>
          <h2 className="text-2xl lg:text-7xl md:text-3xl font-bold pt-3">
            I'm Christian Lapinig.
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
    </div>
  );
}

export default App;
