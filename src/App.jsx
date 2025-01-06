import "./App.css";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Logo />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
