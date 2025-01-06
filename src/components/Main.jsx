import DashboardImg from "../assets/illustration-dashboard.png";
import { useState } from "react";


const Main = () => {
  const [email , setEmail] = useState("");
  const [error, setError] = useState(0);
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);


  const handleSubmit = (event) =>{
    event.preventDefault();
    if(!email || !isValidEmail(email)){
        setError(1);
    } else{
        setError(0);
        alert('Форма отправлена!');
    }
  }
  

  return (
    <main className="flex flex-col items-center">
      <p className="text-5xl">We are launching <b>soon!</b></p>
      <p>Subscribe and get notified</p>
      <form onSubmit={handleSubmit} action="/" className="flex justify-center items-center">
        <div className="flex flex-col justify-start">
            <input 
                className={`py-4 pr-28 pl-6 rounded-full border  ${error === 1 ? 'border-light-red' : 'border-pale-blue'}`} 
                placeholder="Your email address..." 
                type="email"
                onChange={(e) => setEmail(e.target.value.trim())}
                value={email}
            />
            {error && <p className={`text-light-red pl-6 mt-2 ${error === 1 ? 'block' : 'hidden'}`}>Please provide a valid email address</p>}
        </div>
        <button 
            type="submit"
            className="bg-blue text-white font-semibold px-16 py-4 rounded-full"
        >
            Notify Me
        </button>
      </form>
      <div>
        <img src={DashboardImg} alt="Dashboard Illustration"/>
      </div>
    </main>
  );
};

export default Main;
