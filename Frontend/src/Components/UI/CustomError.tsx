function CustomError({ errMsg = "Internal Error" }: { errMsg?: string }) {
  return (
    <section>{`Sorry! Something went wrong. Couldn't load data . Error ${errMsg}`}</section>
  );
}

export default CustomError;
