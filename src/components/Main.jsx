import DashboardImg from "../assets/illustration-dashboard.png";

const Main = () => {
  return (
    <main className="flex flex-col items-center">
      <p className="text-5xl">We are launching <b>soon!</b></p>
      <p>Subscribe and get notified</p>
      <form action="">
        <input placeholder="Your email address..." />
        <button 
            type="submit"
            className="bg-blue text-white font-semibold px-16 py-4 rounded-full"
        >Notify Me</button>
      </form>
      <div>
        <img src={DashboardImg} />
      </div>
    </main>
  );
};

export default Main;
