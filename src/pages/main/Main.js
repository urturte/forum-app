import Navbar from "../../components/navbar/navbar";
import MainBody from "../../components/mainBody/mainBody";
import styles from "../main/App.css";
function Main() {
  return (
    <div className={styles.main}>
      <Navbar />
      <MainBody />
    </div>
  );
}

export default Main;
