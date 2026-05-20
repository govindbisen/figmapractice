

import styles from './App.module.css';
import { MdPark } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { GiTridentShield } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { FaHotel } from "react-icons/fa";

import bgVideo from './assets/video/bgvideo.mp4';
import logo from './assets/images/imagicaa_logo.png';
import image1 from './assets/images/image1.png';
import image2 from './assets/images/image2.png';
import image3 from './assets/images/image3.png';
import image4 from './assets/images/image4.png';
import imagepopularride from './assets/images/imagepopularride.png';


function App() {
  return (
    <div className={styles.container}>

      <div className={styles.firstpage}>
        <video className={styles.bgVideo} autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}></div>
        <nav className={styles.navbar_container}>
          <div className={styles.bar_img}>
            <img src={logo} alt="imagicaa_logo" />
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


      <div className={styles.pick_park}>
        <h2>PICK YOUR</h2>

        <div className={styles.pick_park_experience}>
          <span>PARK EXPERIENCE</span>
        </div>
      </div>

      {/*  second page */}

      <div className={styles.secondpage}>

        {/* Theme Park Card */}
        <div className={`${styles.card} ${styles.theme}`}>
          <div className={styles.textContainer}>
            <div className={styles.title}>Theme Park</div>
            <div className={styles.description}>Theme park with rides, shows & magic for all ages.</div>
            <div className={styles.button}>Explore More</div>
          </div>
          <div className={styles.imageWrapper}>
            <img src={image1} alt="Theme Park" className={styles.cardImage} />
          </div>
        </div>

        {/* Water Park Card */}
        <div className={`${styles.card} ${styles.water}`}>
          <div className={styles.textContainer}>
            <div className={styles.title}>Water Park</div>
            <div className={styles.description}>Water park with rides, magic for all ages.</div>
            <div className={styles.button}>Explore More</div>
          </div>
          <div className={styles.imageWrapper}>
            <img src={image2} alt="Water Park" className={styles.cardImage} />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.rightColumn}>

          {/* Snow Park Card */}
          <div className={`${styles.smallCard} ${styles.snow}`}>
            <div className={styles.textContainer}>
              <div className={styles.title}>Snow Park</div>

              <div className={styles.description}>
                Theme park with rides, shows & magic for all ages.
              </div>

              <div className={styles.button}>Explore More</div>
            </div>

            <div className={styles.imageWrapper}>
              <img src={image3} alt="Snow Park" className={styles.cardImage} />
            </div>
          </div>


          {/* Trampoline Card */}
          <div className={`${styles.smallCard} ${styles.trampoline}`}>
            <div className={styles.textContainer}>
              <div className={styles.title}>Trampoline</div>

              <div className={styles.description}>
                Theme park with rides, shows & magic for all ages.
              </div>

              <div className={styles.button}>Explore More</div>
            </div>

            <div className={styles.imageWrapper}>
              <img src={image4} alt="Trampoline" className={styles.cardImage} />
            </div>
          </div>

        </div>



      </div>

      <div className={styles.thirdpage}>

        <div className={styles.popularimagecontainer}>

          <img
            src={imagepopularride}
            alt="popular rides"
            className={styles.popular_bg}
          />

          <div className={styles.popular_rides_section}>

            {/* HEADING */}
            <div className={styles.popular_heading}>

              <div className={styles.popular_text}>
                POPULAR
              </div>

              <div className={styles.rides_text}>
                <span>RIDES</span>
              </div>

            </div>


            {/* SIDE TEXTS */}

            <div className={styles.family_text}>
              Family
            </div>

            <div className={styles.kids_text}>
              Kids
            </div>

            <div className={styles.thrill_text}>
              Thrill
            </div>


            {/* CENTER TOGGLE */}

            <div className={styles.toggle_wrapper}>

              <div className={styles.toggle_left}>
                Theme Park
              </div>

              <div className={styles.toggle_right}>
                Water Park
              </div>

            </div>

          </div>

        </div>


        {/* WAVE */}

        <div className={styles.waveWrapper}>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#000b76"
              fillOpacity="1"
              d="M0,256L18.5,245.3C36.9,235,74,213,111,208C147.7,203,185,213,222,202.7C258.5,192,295,160,332,138.7C369.2,117,406,107,443,122.7C480,139,517,181,554,186.7C590.8,192,628,160,665,170.7C701.5,181,738,235,775,218.7C812.3,203,849,117,886,112C923.1,107,960,181,997,192C1033.8,203,1071,149,1108,122.7C1144.6,96,1182,96,1218,112C1255.4,128,1292,160,1329,176C1366.2,192,1403,192,1422,192L1440,192L1440,320L0,320Z"
            />
          </svg>

        </div>


        <div className={styles.svg_container}></div>

      </div>


    </div>
  );
}

export default App;