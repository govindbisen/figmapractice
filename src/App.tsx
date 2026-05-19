

import styles from './App.module.css';
import { MdPark } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { GiTridentShield } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { FaHotel } from "react-icons/fa";

function App() {
  return (
    <div className={styles.container}>

      <div className={styles.firstpage}>
        <video className={styles.bgVideo} autoPlay loop muted playsInline>
          <source src="src\assets\video\bgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}></div>
        <nav className={styles.navbar_container}>
          <div className={styles.bar_img}>
            <img src="src/assets/images/imagicaa_logo.png" alt="imagicaa_logo" />
          </div>

          <div className={styles.bar_nav}>
            <div className={styles.bar_nav_item}>
              <span>
                <MdPark />
              </span>
              <p>Parks </p>
            </div>
            <div className={styles.bar_nav_item}>
              <span>
                <BiSolidOffer />
              </span>
              <p>
                Offers
              </p>
            </div>
            <div className={styles.bar_nav_item}>
              <span>
                <GiTridentShield />
              </span>
              <p>
                Rides
              </p>
            </div>
            <div className={styles.bar_nav_item}>
              <span>
                <FaCalendarAlt />
              </span>
              <p>Plan Visits
              </p> </div>
            <div className={styles.bar_nav_item}>
              <span>
                <FaHotel />
              </span>
              <p>
                Stay</p></div>
            <div className={styles.bar_nav_item}>
              <span>

                <LuPartyPopper />

              </span>


              <p>Events
              </p></div>
          </div>

          <button>
            Book
            <br />
            Now
          </button>
        </nav>

        <div className={styles.firstpage_content}>
          <h1 className={styles.firstpage_content_heading}>
            India's favourite
          </h1>
          <p className={styles.firstpage_content_secondheading}>
            holiday destination
          </p>

          <button className={styles.firstpage_content_button}>
            book ticket
          </button>
        </div>
      </div>



    </div>
  );
}

export default App;