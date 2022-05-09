import './App.css';
import Nav from 'components/Nav';
import Header from 'components/Header';
import About from 'components/About';
import Experience from 'components/Experience';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="w-full p-5 lg:w-3/5 lg:mx-auto md:mx-auto">
        <Header />
        <About />
        <Experience />
      </div>
    </div>
  );
}

export default App;
