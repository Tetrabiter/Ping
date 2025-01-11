import LogoSrc from "../assets/logo.svg"

const Logo = () =>{
    return(
        <div className="mb-[15%] mt-[15%] sm:mt-0 sm:mb-[5%]">
            <img src={LogoSrc} alt="Ping Logo" />
        </div>
    )
}

export default Logo;