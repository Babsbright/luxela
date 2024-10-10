import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <BallTriangle
        height={30}
        width={30}
        radius={5}
        color="#fff"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </>
  );
};

export default Loader;
