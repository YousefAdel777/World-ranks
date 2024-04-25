import logo from "../assets/Logo.svg"

const Header = () => {
    return (
        <header className="pt-[7.25rem] pb-36 lg:pb-24">
            <img src={logo} alt="World ranks logo" className="logo mx-auto"/>
        </header>
    );
}

export default Header;