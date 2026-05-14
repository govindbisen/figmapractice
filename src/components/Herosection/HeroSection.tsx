import styles from './HeroSection.module.css';
import Navbar from '../Navbar/Navbar';
import HeroContent from '../HeroContent/HeroContent';
import HeroBottomContent from '../HeroBottomContent/HeroBottomContent';
import bgVideo from '../../assets/video/bgvideo.mp4';

function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <video
                className={styles.video}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={bgVideo} type="video/mp4" />
            </video>

            <div className={styles.overlay}></div>

            {/* Navbar over video */}
            <Navbar />

            <HeroContent />

            <HeroBottomContent />
        </section>
    );
}

export default HeroSection;