import { NavLink } from "react-router-dom";
import { footerItems } from "../../utils/footerItems";

function FooterEleOne() {
  return (
    <div className="grid grid-cols-[1fr,1fr,2fr,2fr] justify-center items-start w-[60%] gap-x-20 ml-6">
      {footerItems.map((item) => (
        <div className="my-10 bt-1" key={item.title}>
          <h3 className="text-fontSizeHeader">{item.title}</h3>
          <div>
            {item.listItems.map((itemtwo, index) => (
              <p
                className="my-2 hover:underline text-textFooterLight"
                key={index}
              >
                <NavLink to="/">{itemtwo}</NavLink>
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FooterEleOne;
