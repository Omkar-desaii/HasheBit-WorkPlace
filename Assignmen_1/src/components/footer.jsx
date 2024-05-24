import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerChild} />
      <div className={styles.frameParent}>
        <div className={styles.trendtechSolutionsParent}>
          <div className={styles.trendtechSolutions}>TRENDTECH SOLUTIONS</div>
          <div className={styles.navigatingTomorrowsTechnoloWrapper}>
            <i className={styles.navigatingTomorrowsTechnolo}>
              Navigating Tomorrow's Technology Today
            </i>
          </div>
        </div>
        <div className={styles.mainFooter}>
          <div className={styles.termsOfService}>
            <div className={styles.termsOfService1}>Terms of Service</div>
          </div>
          <div className={styles.contactInformation}>Contact Information</div>
          <div className={styles.termsOfService2}>
            <div className={styles.siteMap}>Site Map</div>
          </div>
          <div className={styles.termsOfService3}>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
          </div>
        </div>
      </div>
      <div className={styles.contactInformation1}>
        <div className={styles.omkarAllRights}>
          © 2024 OmkarDesai-TechTrend. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
