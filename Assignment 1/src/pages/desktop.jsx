import SideBar from "../components/side-bar";
import FrameComponent from "../components/Header";
import MainContent from "../components/main-content";
import Footer from "../components/footer";
import styles from "./desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop1}>
      <SideBar />
      <div className={styles.mainMenuParent}>
        <FrameComponent />
        <main className={styles.mainContent}>
          <MainContent />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Desktop;
