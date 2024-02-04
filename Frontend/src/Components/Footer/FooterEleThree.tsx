import { NavLink } from "react-router-dom";
import { footerItemsTwo } from "../../utils/footerItemsTwo";

function FooterEleThree() {
  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-x-2">
        {footerItemsTwo.map((item, index) => (
          <div className="my-5 bt-1" key={index}>
            <h3 className="text-fontSizePrimary text-textWhite">
              {item.title}
            </h3>
            <div>
              {item.items.map((itemtwo, index) => (
                <p
                  className="my-2 hover:underline text-textFooterLight text-fontSizeSecondary -m-x-6"
                  key={index}
                >
                  <NavLink to="/">{itemtwo}</NavLink>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterEleThree;
