const Header = () => {
  return (
    <header className="flex w-screen items-center px-[167px] py-[63px] relative z-10 font-light">
      <img src="./logo.svg" alt="logo" />
      <nav className="flex gap-8 ml-14">
        <div>
          <a href="#">
            Product <img src="./icon-arrow-light.svg" alt="icon arrow light" />
          </a>
          <div>
            <a href="#">Overview</a>
            <a href="#">Pricing</a>
            <a href="#">Marketplace</a>
            <a href="#">Features</a>
            <a href="#">Integrations</a>
          </div>
        </div>
        <div>
          <a href="#">
            Company <img src="./icon-arrow-light.svg" alt="icon arrow light" />
          </a>
          <div>
            <a href="#">About</a>
            <a href="#">Team</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div>
          <a href="#">
            Connect <img src="./icon-arrow-light.svg" alt="icon arrow light" />
          </a>
          <div>
            <a href="#">Contact</a>
            <a href="#">Newsletter</a>
            <a href="#">Linkedin</a>
          </div>
        </div>
      </nav>
      <div className="flex ml-auto items-center">
        <a className="text-white cursor-pointer">Login</a>
        <button className="bg-white text-cta-text px-10 py-3 rounded-full ml-8 hover:bg-cta-hover-background hover:text-white transition-colors font-bold">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
