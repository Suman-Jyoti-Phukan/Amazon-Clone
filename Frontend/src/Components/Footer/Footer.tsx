import FooterEleOne from "./FooterEleOne";
import FooterEleThree from "./FooterEleThree";
import FooterEleTwo from "./FooterEleTwo";

function Footer() {
  function handleScroll() {
    const header = document.querySelector("header")! as HTMLHeadingElement;

    header.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div className="grid-rows-3">
        <nav
          className="bg-backTopBg h-12 flex items-center justify-center text-fontSizePrimary text-textWhite
        font-semi hover:cursor-pointer"
        >
          <p onClick={handleScroll}>Back To Top</p>
        </nav>
        <div className="bg-footerOne text-textWhite flex justify-center border-b">
          <FooterEleOne />
        </div>
        <div className="bg-footerOne flex justify-center">
          <FooterEleTwo />
        </div>

        <div className="bg-footerTwo">
          <FooterEleThree />
        </div>
      </div>
    </div>
  );
}

export default Footer;
