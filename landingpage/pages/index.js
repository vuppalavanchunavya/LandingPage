import styles from "./index.module.css";

const Freebie = () => {
  return (
    <div className={styles.freebie}>
      <main className={styles.preview}>
        <div className={styles.appLandingPageContainer}>
          <p className={styles.appLanding}>App Landing</p>
          <p className={styles.pageFree}>{`Page Free `}</p>
        </div>
        <b className={styles.superAwesome}>Super Awesome</b>
        <div className={styles.sourceFiles}>Source Files</div>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.freeTemplate}>Free Template</div>
        </button>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <img
            className={styles.figmaIcon}
            loading="lazy"
            alt=""
            src="/figma.svg"
          />
        </div>
        <div className={styles.wrapperGroup1}>
          <img
            className={styles.wrapperGroup1Child}
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
        </div>
        <section className={styles.desktop32Parent}>
          <img
            className={styles.desktop32}
            loading="lazy"
            alt=""
            src="/desktop--3-2@2x.png"
          />
          <div className={styles.separator} />
          <div className={styles.separator1} />
          <div className={styles.div} />
          <div className={styles.wrapperDesktop31}>
            <img
              className={styles.desktop31}
              alt=""
              src="/desktop--3-1@2x.png"
            />
          </div>
        </section>
      </main>
      <img
        className={styles.iphone13ProFrontIcon}
        alt=""
        src="/iphone13profront@2x.png"
      />
    </div>
  );
};

export default Freebie;