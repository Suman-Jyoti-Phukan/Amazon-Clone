import ClipLoader from "react-spinners/ClipLoader";

function Spinner({ size = 40 }) {
  return (
    <div>
      <ClipLoader
        color="#000"
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
