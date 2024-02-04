import { NavLink } from "react-router-dom";

const countries: Array<string> = [
  "Australia",
  "Brazil",
  "Canada",
  "China",
  "France",
  "Germany",
  "Italy",
  "Japan",
  "Mexico",
  "Netherlands",
  "Poland",
  "Singapore",
  "Spain",
  "Turkey",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
];

function FooterEleTwo() {
  return (
    <div>
      <div className="flex flex-col items-center py-8">
        <div>
          <img
            src="/logo.png"
            alt="Amazon Logo"
            className="w-[5.4rem] h-[2rem]"
          />
        </div>
        <div className="flex  flex-wrap gap-x-2 text-fontSizeSecondary py-6">
          {countries.map((item, index) => (
            <p
              className="my-2 hover:underline text-textFooterLight"
              key={index}
            >
              <NavLink to="/">{item}</NavLink>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterEleTwo;
