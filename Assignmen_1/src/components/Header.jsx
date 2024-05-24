import styles from "./Header.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.mainMenu}>
      <div className={styles.headerGitHubLinkedInTwitt}>
        <div className={styles.header}>
          <img
            className={styles.techMedia1}
            loading="lazy"
            alt=""
            src="/tech-media-1@2x.png"
          />
          <img
            className={styles.githubIcon}
            loading="lazy"
            alt=""
            src="/github@2x.png"
          />
          <img
            className={styles.linkedinIcon}
            loading="lazy"
            alt=""
            src="/linkedin@2x.png"
          />
          <img
            className={styles.twitterIcon}
            loading="lazy"
            alt=""
            src="/twitter@2x.png"
          />
        </div>
        <header className={styles.menubar}>
          <div className={styles.menubbar} />
          <div className={styles.homeWrapper}>
            <div className={styles.home}>Home</div>
          </div>
          <div className={styles.aboutus}>AboutUs</div>
          <div className={styles.servicesWrapper}>
            <div className={styles.services}>Services</div>
          </div>
          <div className={styles.contactus}>ContactUs</div>
        </header>
      </div>
    </div>
  );
};

export default FrameComponent;
