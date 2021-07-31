import Loader from "react-loader-spinner";
import s from "./Loader.module.css";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderSpinner = () => {
  return (
    <Loader
      className={s.Loader}
      type="ThreeDots"
      color="#fc0362"
      height={80}
      width={80}
    />
  );
};

export default LoaderSpinner;
