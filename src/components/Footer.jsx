function Footer() {
  return (
    <footer>
      <div className="flex text-blue justify-center gap-4">
        <button className="p-2 text-xl border rounded-full flex justify-center items-center">
          <ion-icon name="logo-facebook"></ion-icon>
        </button>
        <button className="p-2 text-xl border rounded-full flex justify-center items-center">
          <ion-icon name="logo-twitter"></ion-icon>
        </button>
        <button className="p-2 text-xl border rounded-full flex justify-center items-center">
          <ion-icon name="logo-instagram"></ion-icon>
        </button>
      </div>

      <div className="mt-[2%]">
        <p className="text-gray text-center">&copy; Copyright Ping. All rights reserved.</p>
        <p>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
