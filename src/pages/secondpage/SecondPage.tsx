
import styles from './SecondPage.module.css';

function SecondPage() {
    return (
        <main className={styles.secondpage}>
            <h2 className="pic">
                Pick Your
            </h2>
            <p>
                Park Experience
            </p>

            <div>
                <div>
                    <h2>
                        Theme Park
                    </h2>
                    <p>
                        Theme park with rides, shows & magic for all ages.
                    </p>
                    <button>
                        Explore More
                    </button>
                </div>
                <div>
                    water park
                </div>
                <div>
                    <div>
                        snow park
                    </div>
                    <div>
                        trampoline
                    </div>
                </div>

            </div>
        </main>
    );
}

export default SecondPage;