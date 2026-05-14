import HeroSection from '../../components/Herosection/HeroSection';
import styles from './Home.module.css';

function Home() {
    return (
        <main className={styles.home}>
            <HeroSection />
        </main>
    );
}

export default Home;