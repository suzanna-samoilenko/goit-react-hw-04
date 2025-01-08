import styles from "./Loader.module.css";
import { LineWave } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
};

export default Loader;
