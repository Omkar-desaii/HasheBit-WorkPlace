import styles from "./main-content.module.css";

const MainContent = () => {
  return (
    <section className={styles.mainContent}>
      <div className={styles.maincontent} />
      <div className={styles.whatWeOfferWrapper}>
        <h2 className={styles.whatWeOfferContainer}>
          <span>{`What We `}</span>
          <b className={styles.offer}>OFFER!!!</b>
        </h2>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.websiteBuildingAndDevelopmeParent}>
          <div className={styles.websiteBuildingAnd}>
            Website Building And Development
          </div>
          <div className={styles.termsOfServiceSiteMapPriv}>
            <div className={styles.trendtechSolutions}>
              <div className={styles.navigatingTomorrowsTechnolog}>
                <div className={styles.webDevelopmentServices} />
                <img
                  className={styles.websiteBuiltingIcon}
                  loading="lazy"
                  alt=""
                  src="/website-builting@2x.png"
                />
              </div>
              <div className={styles.elevateYourOnlinePresenceWWrapper}>
                <div className={styles.elevateYourOnlineContainer}>
                  <span>{` Elevate your online presence with our comprehensive `}</span>
                  <b className={styles.webDevelopmentExpertise}>
                    web development expertise
                  </b>
                  <span>
                    , spanning responsive design to robust backend solutions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.dataAnalyticsServicesParent}>
            <div className={styles.dataAnalyticsServices}>
              Data Analytics Services
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <div className={styles.dataAnalyticsSolutionsParent}>
                  <div className={styles.dataAnalyticsSolutions} />
                  <img
                    className={styles.dataAnalyticsIcon}
                    loading="lazy"
                    alt=""
                    src="/data-analytics@2x.png"
                  />
                </div>
                <div className={styles.withOurDataAnalyticsServicWrapper}>
                  <div className={styles.withOurDataContainer}>
                    <span>{`With our `}</span>
                    <b className={styles.dataAnalyticsServices1}>
                      Data Analytics Services
                    </b>
                    <span>
                      , unlock actionable insights and drive informed
                      decision-making, harnessing the power of data for business
                      growth with our cutting-edge solutions.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.cloudComputingServicesParent}>
            <div className={styles.cloudComputingServices}>
              Cloud Computing Services
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.cloudComputingSolutionsParent}>
                <div className={styles.cloudComputingSolutions} />
                <img
                  className={styles.cloudIcon}
                  loading="lazy"
                  alt=""
                  src="/cloud@2x.png"
                />
              </div>
            </div>
            <div className={styles.leverageOurTailoredSolutionWrapper}>
              <div className={styles.leverageOurTailoredContainer}>
                <span>{` Leverage our tailored solutions to embrace the scalability and flexibility of `}</span>
                <b className={styles.cloudComputing}>cloud computing</b>
                <span>
                  , ensuring seamless integration and maximum efficiency for
                  migration or infrastructure optimization.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
