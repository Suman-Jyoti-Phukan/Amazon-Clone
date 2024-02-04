import { TbSearch } from "react-icons/tb";
import { options } from "../../utils/options.js";
import { useState } from "react";

function SearchBar() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [textInput, setTextInput] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.value;
  };

  const handleSelectChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(textInput);
    setTextInput(event.currentTarget.value);
  };

  return (
    <div className="w-[50rem]">
      <div className="grid grid-cols-[5fr,85fr,5fr] bg-blue-500 h-10 rounded-md">
        {/* Select  */}
        <form onSubmit={handleSubmit}>
          <select
            id="categoryDropdown"
            value={selectedCategory}
            onChange={handleSelectChange}
            className=" bg-selectBg h-full focus:ring focus:ring-signInBg active:ring active:ring-signInBg active:rounded-md border-0 outline-none focus:rounded-md text-fontSizeSecondary rounded-tl-md rounded-bl-md"
          >
            {options.map((category: string) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </form>

        {/* Text Input  */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={textInput}
            onChange={handleInputChange}
            placeholder="Search in Amazon.in"
            className="h-full w-full focus:ring focus:ring-signInBg active:ring active:ring-signInBg active:rounded-md border-0 outline-none focus:rounded-md pl-5 "
          />
        </form>

        {/* Search Icon */}
        <button className="text-primaryText bg-signInBg flex items-center justify-center hover:bg-signInBgShade rounded-br-md rounded-tr-md">
          <TbSearch size={20} />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
