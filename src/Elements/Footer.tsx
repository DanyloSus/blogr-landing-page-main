const Footer = () => {
  return (
    <footer className="bg-footer-background text-footer-text mt-[300px] rounded-tr-[100px] h-[400px] py-[70px] px-[165px] flex justify-between items-start lg:mt-[100px] lg:flex-col lg:gap-10 lg:text-center lg:px-0 lg:h-auto">
      <img src="./logo.svg" alt="logo" className="lg:mx-auto" />
      <div>
        <a href="#">Product</a>
        <div>
          <a href="#">Overview</a>
          <a href="#">Pricing</a>
          <a href="#">Marketplace</a>
          <a href="#">Features</a>
          <a href="#">Integrations</a>
        </div>
      </div>{" "}
      <div>
        <a href="#">Company</a>
        <div>
          <a href="#">About</a>
          <a href="#">Team</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>
      </div>
      <div>
        <a href="#">Connect</a>
        <div>
          <a href="#">Contact</a>
          <a href="#">Newsletter</a>
          <a href="#">Linkedin</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
