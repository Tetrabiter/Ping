import "./App.css";
import Logo from "./components/Logo";
import DashboardImg from '../src/assets/illustration-dashboard.png'

function App() {
  return (
    <>
      <Logo />
      <p>We are launching soon!</p>
      <p>Subscribe and get notified</p>
      <input placeholder="Your email address..." />
      <button type="submit">Notify Me</button>
      <img src={DashboardImg} />

    </>
  );
}

export default App;
