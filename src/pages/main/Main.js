import Navbar from "../../components/organisms/navbar/navbar";
import MainBody from "../../components/organisms/mainBody/mainBody";
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
