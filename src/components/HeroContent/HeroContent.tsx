import styles from './HeroContent.module.css';

function HeroContent() {
    return (
        <div className={styles.heroContent}>
            <h1 className={styles.title}>INDIA’S FAVORITE</h1>

            <div className={styles.subTitleWrapper}>
                <div className={styles.line}></div>

                <p className={styles.subTitle}>HOLIDAY DESTINATION</p>

                <div className={styles.line}></div>
            </div>

            <button className={styles.ticketBtn}>
                Book Tickets
            </button>
        </div>
    );
}

export default HeroContent;