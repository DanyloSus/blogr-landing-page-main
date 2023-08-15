import MobileMenu from "./MobileMenu";

const Header = () => {
  const handleClick = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    const burgerImage = document.getElementById("burger") as HTMLImageElement;

    if (mobileMenu) {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
      mobileMenu.classList.toggle("opacity-0");
    }

    if (burgerImage) {
      if (burgerImage.src.endsWith("/icon-hamburger.svg")) {
        burgerImage.src = "./icon-close.svg";
      } else {
        burgerImage.src = "./icon-hamburger.svg";
      }
    }
  };

  return (
    <header className="flex w-screen items-center px-[167px] py-[63px] relative z-10 font-light lg:px-6 lg:py-14">
      <img src="./logo.svg" alt="logo" />
      <nav className="flex gap-8 ml-14 lg:hidden">
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
      <div className="flex ml-auto items-center lg:hidden">
        <a className="text-white cursor-pointer">Login</a>
        <button className="bg-white text-cta-text px-10 py-3 rounded-full ml-8 hover:bg-cta-hover-background hover:text-white transition-colors font-bold">
          Sign Up
        </button>
      </div>
      <img
        src="./icon-hamburger.svg"
        alt="icon hamburger"
        className="ml-auto hidden lg:block cursor-pointer"
        onClick={handleClick}
        id="burger"
      />
      <MobileMenu />
    </header>
  );
};

export default Header;
