import { useSearchParams } from "react-router-dom";

function SortProducts() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortItems = [
    { label: "Discount", value: "discount" },
    {
      label: "Sort By Price (High to Low )",
      value: "-price",
    },
    { label: "Sort By Price (Low to High )", value: "price" },
    {
      label: "Sort By Name (A to Z )",
      value: "-productTitle",
    },
    { label: "Sort By Name (Z to A )", value: "productTitle" },
  ];

  function handleSort(queryString: string, value: string) {
    searchParams.set(queryString, value);
    setSearchParams(searchParams);
  }

  return (
    <section>
      <div className="text-fontSizePrimary p-4">
        <h2 className="text-fontSizePrimary font-semibold mb-4">Sort By</h2>
        <div>
          {sortItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleSort("sort", item.value)}
              className="my-1 font-normal"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SortProducts;
