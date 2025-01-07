import DashboardImg from "../assets/illustration-dashboard.png";
import { useState } from "react";


const Main = () => {
  const [email , setEmail] = useState("");
  const [error, setError] = useState(false);
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);


  const handleSubmit = (event) =>{
    event.preventDefault();
    if(!email || !isValidEmail(email)){
        setError(true);
    } else{
        setError(false);
        alert('Форма отправлена!');
    }
  }
  

  return (
    <main className="flex flex-col items-center">
      <p className="text-3xl sm:text-5xl text-gray">We are launching <b className="text-black">soon!</b></p>
      <p className="text-lg mt-[1.5%] mb-[3%]">Subscribe and get notified</p>
      <form onSubmit={handleSubmit} action="/" className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input 
                className={`py-4 pr-28 pl-6 rounded-full border  ${error === true ? 'border-light-red' : 'border-pale-blue'}`} 
                placeholder="Your email address..." 
                type="email"
                onChange={(e) => setEmail(e.target.value.trim())}
                value={email}
            />
        <button 
            type="submit"
            className="bg-blue w-full text-white font-semibold px-16 py-4 rounded-full shadow-xl"
        >
            Notify Me
        </button>
      </form>
      {error && <p className={`text-light-red text-left w-full sm:w-1/2 pl-12 mt-2 ${error === true ? 'block' : 'hidden'}`}>Please provide a valid email address</p>}
      <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-[12%] sm:mt-[5%]">
        <img src={DashboardImg} alt="Dashboard Illustration"/>
      </div>
    </main>
  );
};

export default Main;
