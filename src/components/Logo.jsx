import LogoSrc from "../assets/logo.svg"

const Logo = () =>{
    return(
        <div className="mb-[15%] sm:mb-[5%]">
            <img src={LogoSrc} alt="Ping Logo" />
        </div>
    )
}

export default Logo;