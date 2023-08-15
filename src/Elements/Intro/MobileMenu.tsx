const MobileMenu = () => {
  return (
    <div
      className="absolute right-6 top-[100px] w-[calc(100%-48px)] bg-white text-body-copy font-bold h-auto z-30 rounded-lg shadow-2xl py-8 px-6 gap-5 flex-col hidden opacity-0 transition-opacity"
      id="mobileMenu"
    >
      <div>
        <a href="#">
          Product <img src="./icon-arrow-dark.svg" alt="icon arrow dark" />
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
          Company <img src="./icon-arrow-dark.svg" alt="icon arrow dark" />
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
          Connect <img src="./icon-arrow-dark.svg" alt="icon arrow dark" />
        </a>
        <div>
          <a href="#">Contact</a>
          <a href="#">Newsletter</a>
          <a href="#">Linkedin</a>
        </div>
      </div>
      <hr />
      <div className="flex items-center flex-col gap-5">
        <a className="text-body-copy cursor-pointer">Login</a>
        <button className="bg-gradient-to-r from-very-light-red to-light-red text-white px-10 py-2 rounded-full font-bold">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
