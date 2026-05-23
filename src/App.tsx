

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
import cartoon1 from './assets/images/image4.png';
import cartoon2 from './assets/images/image4.png';
import cartoon3 from './assets/images/image4.png';
import questionDog from './assets/images/image4.png';




import imagepopularride from './assets/images/imagepopularride.png';
import { useState, useRef, useMemo } from 'react';


function App() {

  const [parkHighlights, setParkHighlights] = useState([
    {
      heading: "Experience Thrilling Roller Coaster Adventures With Friends And Family",
      content:
        "Enjoy exciting roller coaster rides, adventure zones, and entertainment activities designed for visitors of all age groups. Create unforgettable memories with family and friends while exploring fun attractions, live performances, and thrilling experiences throughout the park."
    },
    {
      heading: "Discover Water Rides And Splash Activities During Summer Vacation",
      content:
        "Cool off with exciting water slides, wave pools, and splash zones perfect for summer adventures. Enjoy relaxing pools, fun-filled rides, and safe water attractions that provide entertainment and refreshment for children and adults alike."
    },
    {
      heading: "Enjoy Delicious Food Courts And Relaxing Dining Areas Inside Park",
      content:
        "Taste a variety of delicious snacks, meals, and beverages available across themed food courts and restaurants. Relax in comfortable dining spaces while enjoying quality food options suitable for families, kids, and large visitor groups."
    },
    {
      heading: "Explore Family Friendly Entertainment Shows And Interactive Attractions Daily",
      content:
        "Watch live entertainment shows, musical performances, and interactive activities designed to engage every visitor. Experience family-friendly attractions, colorful parades, and engaging events that make every visit enjoyable and memorable for all age groups."
    },
    {
      heading: "Book Exciting Theme Park Tickets Online For Amazing Weekend Fun",
      content:
        "Reserve your theme park tickets online easily and plan an exciting weekend adventure. Get access to thrilling rides, entertainment zones, food courts, and family activities while enjoying a smooth and hassle-free booking experience."
    }
  ]);

  const activeHighlightIndex = Math.floor(parkHighlights.length / 2);

  const showPreviousHighlight = () => {
    setParkHighlights((previousHighlights) => {
      const updatedHighlights = [...previousHighlights];
      const lastHighlight = updatedHighlights.pop();
      updatedHighlights.unshift(lastHighlight);
      return updatedHighlights;
    });
  };

  const showNextHighlight = () => {
    setParkHighlights((previousHighlights) => {
      const updatedHighlights = [...previousHighlights];
      const firstHighlight = updatedHighlights.shift();
      updatedHighlights.push(firstHighlight);
      return updatedHighlights;
    });
  };

  const arrangedHighlights = useMemo(() => {
    return parkHighlights.map((highlight, index) => {
      let cardOffset = index - activeHighlightIndex;

      if (cardOffset < -2) cardOffset += parkHighlights.length;
      if (cardOffset > 2) cardOffset -= parkHighlights.length;

      return {
        ...highlight,
        cardOffset
      };
    });
  }, [parkHighlights, activeHighlightIndex]);

  const newSliderRef = useRef(null);
  const upcomingSliderRef = useRef(null);
  const whatsNew = [
    {
      number: "06",
      title: "Thrilling new water rides!",
      desc: "Dive into six all new rides designed for splash fun",
      image: image1,
    },
    {
      number: "02",
      title: "New water rides!",
      desc: "Dive into all new rides designed for splash fun",
      image: image2,
    },
    {
      number: "18",
      title: "Thrilling new rides!",
      desc: "Dive into all new rides for splash fun",
      image: image3,
    },
  ];

  const upcomingEvents = [
    {
      title: "Autumn Harvest Fair 27",
      subtitle: "Winter Wonderland Gala 27",
      image: image1,
    },
    {
      title: "Harvest Moon 28",
      subtitle: "Enjoy crafts, food, and shows under the stars.",
      image: image2,
    },
    {
      title: "Winter Fest '29",
      subtitle: "Experience ice skating, markets, and lights.",
      image: image3,
    },
    {
      title: "Magic Nights",
      subtitle: "Live music and fireworks celebration.",
      image: image4,
    },
  ];

  const attractions = [
    {
      image: image1,
      title: "Grand Imagicaa Parade",
    },
    {
      image: image2,
      title: "Water Kingdom Fun",
    },
    {
      image: image3,
      title: "Theme Park Adventure",
    },
    {
      image: image4,
      title: "Magic Castle Show",
    },
    {
      image: image2,
      title: "Family Splash Ride",
    },
  ];

  const offers = [
    {
      id: 1,
      date: "3rd to 12th February",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
      title: "Back to college, fun ka naya semester",
      primaryCta: "Book Tickets",
      secondaryCta: "View Details",
      badge: "Flat 50% Off",
      theme: "blue",
    },
    {
      id: 2,
      date: "3rd to 12th February",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
      title: "Back to college, fun ka naya semester",
      primaryCta: "Book Tickets",
      secondaryCta: "View Details",
      badge: "Up to 45% Off",
      theme: "cyan",
    },
    {
      id: 3,
      date: "3rd to 12th February",
      image:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=900&q=80",
      title: "Back to college, fun ka naya semester",
      primaryCta: "Book Tickets",
      secondaryCta: "View Details",
      badge: "Save up to 30%",
      theme: "purple",
    },
  ];


  const [corosalActive, setCorosalActive] = useState(2)
  const [data, setData] = useState([
    {
      heading: "Experience Thrilling Roller Coaster Adventures With Friends And Family",
      content:
        "Enjoy exciting roller coaster rides, adventure zones, and entertainment activities designed for visitors of all age groups. Create unforgettable memories with family and friends while exploring fun attractions, live performances, and thrilling experiences throughout the park."
    },
    {
      heading: "Discover Water Rides And Splash Activities During Summer Vacation",
      content:
        "Cool off with exciting water slides, wave pools, and splash zones perfect for summer adventures. Enjoy relaxing pools, fun-filled rides, and safe water attractions that provide entertainment and refreshment for children and adults alike."
    },
    {
      heading: "Enjoy Delicious Food Courts And Relaxing Dining Areas Inside Park",
      content:
        "Taste a variety of delicious snacks, meals, and beverages available across themed food courts and restaurants. Relax in comfortable dining spaces while enjoying quality food options suitable for families, kids, and large visitor groups."
    },
    {
      heading: "Explore Family Friendly Entertainment Shows And Interactive Attractions Daily",
      content:
        "Watch live entertainment shows, musical performances, and interactive activities designed to engage every visitor. Experience family-friendly attractions, colorful parades, and engaging events that make every visit enjoyable and memorable for all age groups."
    },
    {
      heading: "Book Exciting Theme Park Tickets Online For Amazing Weekend Fun",
      content:
        "Reserve your theme park tickets online easily and plan an exciting weekend adventure. Get access to thrilling rides, entertainment zones, food courts, and family activities while enjoying a smooth and hassle-free booking experience."
    }
  ]);

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };


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
              fill="#5000ca"
              fillOpacity="1"
              d="M0,256L18.5,245.3C36.9,235,74,213,111,208C147.7,203,185,213,222,202.7C258.5,192,295,160,332,138.7C369.2,117,406,107,443,122.7C480,139,517,181,554,186.7C590.8,192,628,160,665,170.7C701.5,181,738,235,775,218.7C812.3,203,849,117,886,112C923.1,107,960,181,997,192C1033.8,203,1071,149,1108,122.7C1144.6,96,1182,96,1218,112C1255.4,128,1292,160,1329,176C1366.2,192,1403,192,1422,192L1440,192L1440,320L0,320Z"
            />
          </svg>
        </div>
        <div className={styles.svg_container}>

          <div className={styles.carousel_container}>

            {data.map((d, i) => <div className={`${styles.carousel_box_item} ${i == corosalActive ? styles.active : ""}`}>{d.heading}</div>)}

          </div>





        </div>




      </div>






      <section className={styles.wrapper}>
        <div className={styles.overlayGlow}></div>

        <div className={styles.headingBlock}>
          <span className={styles.headingTag}>SPECIAL OFFERS</span>
          <h2 className={styles.heading}>FOR YOU</h2>
        </div>

        <div className={styles.sliderArea}>
          <button className={`${styles.navBtn} ${styles.leftBtn}`} aria-label="Previous offers">
            &#8249;
          </button>

          <div className={styles.cardsRow}>
            {offers.map((offer) => (
              <article key={offer.id} className={styles.cardi}>
                <div className={styles.dateBadge}>{offer.date}</div>

                <div className={`${styles.imageWrap} ${styles[offer.theme]}`}>
                  <img src={offer.image} alt={offer.title} className={styles.cardImage} />
                  <div className={styles.offerBadge}>{offer.badge}</div>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{offer.title}</h3>

                  <div className={styles.actions}>
                    <button className={styles.primaryBtn}>{offer.primaryCta}</button>
                    <button className={styles.secondaryBtn}>{offer.secondaryCta}</button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button className={`${styles.navBtn} ${styles.rightBtn}`} aria-label="Next offers">
            &#8250;
          </button>
        </div>

        <button className={styles.exploreBtn}>Explore All Offers</button>
      </section>


      {/* upcoming  */}

      {/* ********** NEW AND UPCOMING ***************************** */}

      <section className={styles.newandupcoming__section}>

        {/* VIDEO BG */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.newandupcoming__video}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* TOP SECTION */}
        <div className={styles.newandupcoming__top}>

          {/* LEFT */}
          <div className={styles.newandupcoming__left}>

            <h2>WHAT’S NEW</h2>

            <div className={styles.newandupcoming__highlight}>
              AT IMAGICAA
            </div>

            <img
              src={image4}
              alt="character"
              className={styles.newandupcoming__character}
            />

          </div>

          {/* RIGHT */}
          <div className={styles.newandupcoming__right}>

            <div
              ref={newSliderRef}
              className={styles.newandupcoming__slider}
            >

              {whatsNew.map((item, index) => (

                <div
                  key={index}
                  className={styles.newandupcoming__card}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.newandupcoming__cardImage}
                  />

                  <div className={styles.newandupcoming__overlay}></div>

                  <span className={styles.newandupcoming__badge}>
                    High Thrill
                  </span>

                  <div className={styles.newandupcoming__content}>

                    <h1>{item.number}</h1>

                    <h3>{item.title}</h3>

                    <p>{item.desc}</p>

                    <button>
                      Explore More
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* SLIDER BUTTONS */}

            <div className={styles.newandupcoming__buttons}>

              <button
                onClick={() => {
                  newSliderRef.current.scrollBy({
                    left: -320,
                    behavior: "smooth",
                  });
                }}
              >
                &lt;
              </button>

              <button
                onClick={() => {
                  newSliderRef.current.scrollBy({
                    left: 320,
                    behavior: "smooth",
                  });
                }}
              >
                &gt;
              </button>

            </div>

          </div>

        </div>

        {/* TICKER */}

        <div className={styles.newandupcoming__ticker}>
          5 Million+ Happy Visitors ✦ 5 Million+ Happy Customer ✦
          100% Safety Certified ✦ 5 Million+ Happy Visitors ✦
        </div>

        {/* UPCOMING EVENTS */}

        <div className={styles.newandupcoming__events}>

          {/* HEADING */}

          <div className={styles.newandupcoming__heading}>

            <h2>UPCOMING</h2>

            <div className={styles.newandupcoming__highlightDark}>
              EVENTS
            </div>

          </div>

          {/* FILTERS */}

          <div className={styles.newandupcoming__filters}>

            <button>January</button>

            <button className={styles.active}>
              February
            </button>

            <button>March</button>

          </div>

          {/* EVENTS SLIDER */}

          <div
            ref={upcomingSliderRef}
            className={styles.newandupcoming__eventSlider}
          >

            {upcomingEvents.map((item, index) => (

              <div
                key={index}
                className={styles.newandupcoming__eventCard}
              >

                <div className={styles.newandupcoming__eventImageWrap}>

                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.newandupcoming__eventImage}
                  />

                  <span className={styles.newandupcoming__eventDate}>
                    📅 3rd to 12th February
                  </span>

                </div>

                <div className={styles.newandupcoming__eventContent}>

                  <h3>{item.title}</h3>

                  <p>{item.subtitle}</p>

                  <button>
                    Book Tickets
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* BUTTONS */}

          <div className={styles.newandupcoming__buttonsCenter}>

            <button
              onClick={() => {
                upcomingSliderRef.current.scrollBy({
                  left: -320,
                  behavior: "smooth",
                });
              }}
            >
              &lt;
            </button>

            <button
              onClick={() => {
                upcomingSliderRef.current.scrollBy({
                  left: 320,
                  behavior: "smooth",
                });
              }}
            >
              &gt;
            </button>

          </div>

        </div>

      </section>







      {/* MUST SEE ATTRACTIJON  */}

      <section className={styles.attractions__section}>

        {/* LEFT BIG IMAGE */}
        <div className={styles.attractions__left}>
          <img
            src={image3}
            alt="castle"
            className={styles.attractions__castle}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.attractions__right}>

          {/* HEADING */}
          <div className={styles.attractions__heading}>
            <h2>MUST-SEE</h2>

            <div className={styles.attractions__highlight}>
              ATTRACTIONS
            </div>
          </div>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className={styles.attractions__slider}
          >
            {attractions.map((item, index) => (
              <div
                key={index}
                className={styles.attractions__card}
              >
                <div className={styles.attractions__imageWrapper}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.attractions__image}
                  />

                  <span className={styles.attractions__badge}>
                    Must Experience
                  </span>
                </div>

                <div className={styles.attractions__content}>
                  <h3>{item.title}</h3>

                  <p>⏰ 5:30 PM | Theme Park</p>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className={styles.attractions__buttons}>
            <button onClick={scrollLeft}>
              &lt;
            </button>

            <button onClick={scrollRight}>
              &gt;
            </button>
          </div>
        </div>
      </section>

      {/* MAGIC PASS AND STAYCATION  */}
      <section className={styles.staycation__section}>

        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.staycation__video}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* TOP BANNER */}
        <div className={styles.staycation__banner}>

          <div className={styles.staycation__left}>
            <h2>MAGIC PASS</h2>

            <p>EXPERIENCE 365 DAYS OF MAGIC</p>
          </div>

          <div className={styles.staycation__offer}>
            <span>SAVE UPTO</span>

            <h1>59%</h1>

            <p>₹ 7734 ₹ 2999</p>
          </div>

          <div className={styles.staycation__right}>
            <div className={styles.staycation__pill}>
              4 visits in a year
            </div>

            <h3>
              ACROSS DIFFERENT PARK
            </h3>

            <div className={styles.staycation__highlight}>
              OR REPEAT YOUR FAV!
            </div>
          </div>
        </div>

        {/* STAYCATION SECTION */}
        <div className={styles.staycation__wrapper}>

          <div className={styles.staycation__heading}>
            <h2>STAYCATION</h2>

            <div className={styles.staycation__tag}>
              PACKAGES
            </div>
          </div>

          {/* CARD */}
          <div
            className={styles.staycation__card}
            style={{
              backgroundImage: `url(${image3})`,
            }}
          >
            <div className={styles.staycation__overlay}></div>

            <div className={styles.staycation__content}>

              <div className={styles.staycation__distance}>
                Walking distances
              </div>

              <h2>Novotel Imagicaaa</h2>

              <button className={styles.staycation__play}>
                ▶
              </button>

              <div className={styles.staycation__features}>
                <span>Luxury resort experience</span>
                <span>Theme park access</span>
                <span>Water park access</span>
                <span>All meals included</span>
              </div>

              <div className={styles.staycation__buttons}>
                <button className={styles.staycation__primary}>
                  Book Your Stay
                </button>

                <button className={styles.staycation__secondary}>
                  View Details
                </button>
              </div>
            </div>

            {/* DOG IMAGE */}
            <img
              src={cartoon1}
              alt="dog"
              className={styles.staycation__dog}
            />
          </div>
        </div>
      </section>





      {/* SAFETY SECTION  */}

      <section className={styles.safety__section}>
        {/* TOP SAFETY BAR */}
        <div className={styles.safety__top}>
          <div className={styles.safety__left}>
            <img
              src="/images/bear.png"
              alt="bear"
              className={styles.safety__bear}
            />

            <div className={styles.safety__text}>
              <h2>YOUR SAFETY</h2>

              <div className={styles.safety__badge}>
                OUR PRIORITY
              </div>
            </div>
          </div>

          <div className={styles.safety__features}>
            <div className={styles.safety__feature}>
              <div className={styles.safety__icon}>💧</div>
              <p>Water Quality Check</p>
            </div>

            <div className={styles.safety__feature}>
              <div className={styles.safety__icon}>🧪</div>
              <p>Filtration Standards</p>
            </div>

            <div className={styles.safety__feature}>
              <div className={styles.safety__icon}>🩺</div>
              <p>24/7 Medical Support</p>
            </div>

            <div className={styles.safety__feature}>
              <div className={styles.safety__icon}>📋</div>
              <p>Independent Audits</p>
            </div>

            <div className={styles.safety__feature}>
              <div className={styles.safety__icon}>⚙️</div>
              <p>Ride Maintenance</p>
            </div>
          </div>
        </div>

        {/* PLAN VISIT SECTION */}
        <div className={styles.safety__visit}>
          <div className={styles.safety__heading}>
            <h2>PLAN YOUR</h2>

            <div className={styles.safety__highlight}>
              PARK VISIT
            </div>
          </div>

          <div className={styles.safety__cards}>
            <div className={styles.safety__card}>
              <div>
                <h3>How to Reach</h3>
                <p>
                  Park operating hours,
                  directions, and parking option
                </p>
              </div>

              <div className={styles.safety__cardBottom}>
                <button>↗</button>

                <img
                  src="/images/signboard.png"
                  alt="signboard"
                />
              </div>
            </div>

            <div className={styles.safety__card}>
              <div>
                <h3>Park Rules</h3>
                <p>
                  Guidelines, map & codes
                </p>
              </div>

              <div className={styles.safety__cardBottom}>
                <button>↗</button>

                <img
                  src="/images/map.png"
                  alt="map"
                />
              </div>
            </div>

            <div className={styles.safety__card}>
              <div>
                <h3>Facilities</h3>
                <p>
                  Lockers, strollers, wheelchairs
                </p>
              </div>

              <div className={styles.safety__cardBottom}>
                <button>↗</button>

                <img
                  src="/images/locker.png"
                  alt="locker"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* GROUP OUTING  SECTION  */}

      <section className={styles.group__section}>


        {/* ========================= */}
        {/* PLANNING GROUP OUTING */}
        {/* ========================= */}

        <div className={styles.group__outing}>


          {/* HEADING */}

          <div className={styles.group__headingWrapper}>

            <h2 className={styles.group__heading}>
              PLANNING A
            </h2>

            <div className={styles.group__highlight}>
              <span>GROUP OUTING</span>
            </div>

            <img
              src={image1}
              alt=""
              className={styles.group__character}
            />

          </div>



          {/* CARDS */}

          <div className={styles.group__carousel}>


            {
              [
                {
                  image: image1,
                  title: "Corporates & MICE",
                  text: "Team bonding with activities"
                },
                {
                  image: image2,
                  title: "Leadership Retreats",
                  text: "Strategic planning sessions"
                },
                {
                  image: image3,
                  title: "Wellness Programs",
                  text: "Recharge employee wellbeing"
                },
                {
                  image: image4,
                  title: "College Events",
                  text: "Exciting adventures together"
                }
              ].map((item, index) => (

                <div
                  className={styles.group__card}
                  key={index}
                >

                  <img
                    src={item.image}
                    alt=""
                    className={styles.group__cardImage}
                  />

                  <div className={styles.group__overlay}></div>

                  <div className={styles.group__cardContent}>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                    <div className={styles.group__cardBottom}>

                      <button className={styles.group__downloadBtn}>
                        ↓
                      </button>

                      <button className={styles.group__quoteBtn}>
                        Get A Quote
                      </button>

                    </div>

                  </div>

                </div>

              ))
            }

          </div>



          {/* BUTTONS */}

          <div className={styles.group__buttons}>

            <button className={styles.group__circleBtn}>
              ←
            </button>

            <button
              className={`${styles.group__circleBtn} ${styles.group__circleBtnActive}`}
            >
              →
            </button>

          </div>

        </div>



        {/* ========================= */}
        {/* STRIP */}
        {/* ========================= */}

        <div className={styles.group__strip}>
          5 Million+ Happy Visitors • 100% Safety Certified •
          5 Million+ Happy Visitors • 100% Safety Certified •
          5 Million+ Happy Visitors •
        </div>



        {/* ========================= */}
        {/* DINING EXPERIENCE */}
        {/* ========================= */}

        <div className={styles.group__dining}>


          {/* LEFT */}

          <div className={styles.group__diningLeft}>


            <div className={styles.group__diningHeading}>

              <h2>DINING</h2>

              <div className={styles.group__diningHighlight}>
                <span>EXPERIENCES</span>
              </div>

            </div>



            {/* STATS */}

            <div className={styles.group__stats}>

              <div>
                <h3>20+</h3>
                <p>Cuisines</p>
              </div>

              <div>
                <h3>08</h3>
                <p>Restaurants</p>
              </div>

              <div>
                <h3>03</h3>
                <p>Kiosks</p>
              </div>

            </div>



            {/* CHARACTER */}

            <img
              src={image2}
              alt=""
              className={styles.group__diningCharacter}
            />


          </div>



          {/* RIGHT */}

          <div className={styles.group__diningRight}>


            {/* CARDS */}

            <div className={styles.group__restaurantCarousel}>


              {
                [
                  image1,
                  image2,
                  image3,
                  image4
                ].map((img, index) => (

                  <div
                    className={styles.group__restaurantCard}
                    key={index}
                  >

                    <img
                      src={img}
                      alt=""
                      className={styles.group__restaurantImage}
                    />

                    <div className={styles.group__overlay}></div>

                    <div className={styles.group__restaurantContent}>

                      <h3>
                        Palace Hotel
                      </h3>

                      <p>
                        Discover flavors for every mood
                      </p>

                      <div className={styles.group__tags}>

                        <span>ITALIAN</span>

                        <span>North Indian</span>

                        <span>Spanish</span>

                      </div>

                    </div>

                  </div>

                ))
              }

            </div>



            {/* BOTTOM */}

            <div className={styles.group__restaurantBottom}>


              <button className={styles.group__exploreBtn}>
                Explore All Restaurants
              </button>


              <div className={styles.group__buttons}>

                <button className={styles.group__circleBtn}>
                  ←
                </button>

                <button
                  className={`${styles.group__circleBtn} ${styles.group__circleBtnActive}`}
                >
                  →
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>




      {/* HAPPY GUEST  */}


      <section className={styles.happy_guest__section}>


        {/* ========================= */}
        {/* TOP HAPPY GUEST SECTION */}
        {/* ========================= */}

        <div className={styles.happy_guest__top}>

          {/* HEADING */}

          <div className={styles.happy_guest__headingWrapper}>

            <h2 className={styles.happy_guest__heading}>
              10M+
            </h2>

            <div className={styles.happy_guest__highlight}>
              <span>HAPPY GUESTS</span>
            </div>

            <p className={styles.happy_guest__subtext}>
              AND COUNTING...
            </p>

          </div>


          {/* CONTENT */}

          <div className={styles.happy_guest__content}>


            {/* LEFT */}

            <div className={styles.happy_guest__leftCard}>

              <img
                src={image1}
                alt=""
                className={styles.happy_guest__topImage}
              />

              <div className={styles.happy_guest__reviewCard}>
                <h3>“Best day of my life spent in...”</h3>

                <p>
                  Best service ever had in any Theme Park on 20th Dec with my Family
                  of 8 members. All should take VIP tickets if travelling with Family...
                </p>

                <span>
                  Sharad Sikka
                </span>

              </div>

            </div>


            {/* CENTER */}

            <div className={styles.happy_guest__center}>

              <img
                src={image2}
                alt=""
                className={styles.happy_guest__character}
              />

              <button className={styles.happy_guest__button}>
                Drop A Review
              </button>

            </div>


            {/* RIGHT */}

            <div className={styles.happy_guest__right}>

              <div className={styles.happy_guest__reviewCardPurple}>

                <h3>“Best day of my life spent in...”</h3>

                <p>
                  Best service ever had in any Theme Park on 20th Dec with my Family
                  of 8 members. All should take VIP tickets if travelling with Family...
                </p>

                <span>
                  Sharad Sikka
                </span>

              </div>

              <div className={styles.happy_guest__reviewCardBlue}>

                <h3>“Best day of my life spent in...”</h3>

                <p>
                  Best service ever had in any Theme Park on 20th Dec with my Family
                  of 8 members. All should take VIP tickets if travelling with Family...
                </p>

                <span>
                  Sharad Sikka
                </span>

              </div>

            </div>

          </div>

        </div>



        {/* ========================= */}
        {/* MERCHANDISE SECTION */}
        {/* ========================= */}

        <div className={styles.happy_guest__merchandise}>


          {/* HEADING */}

          <div className={styles.happy_guest__merchandiseHeading}>

            <h2>
              IMAGICAA’S
            </h2>

            <div className={styles.happy_guest__merchandiseHighlight}>
              <span>MERCHANDISE</span>
            </div>

          </div>



          {/* CATEGORY BUTTONS */}

          <div className={styles.happy_guest__tabs}>

            <button className={styles.happy_guest__tabActive}>
              Men
            </button>

            <button>Women</button>

            <button>Juniors</button>

            <button>Collectibles</button>

          </div>



          {/* SUB CATEGORY */}

          <div className={styles.happy_guest__subTabs}>

            <span className={styles.happy_guest__subTabActive}>
              Casual Wear
            </span>

            <span>Active Wear</span>

            <span>Winter Wear</span>

            <span>Formal Wear</span>

          </div>



          {/* CARDS */}

          <div className={styles.happy_guest__products}>


            {
              [image1, image2, image3, image4].map((img, index) => (

                <div
                  className={styles.happy_guest__productCard}
                  key={index}
                >

                  {/* ROUND IMAGE */}

                  <div className={styles.happy_guest__circle}>

                    <img
                      src={img}
                      alt=""
                      className={styles.happy_guest__productImage}
                    />

                  </div>

                  <p>
                    Classic Imagicaa T-Shirt
                  </p>

                </div>

              ))
            }

          </div>



          {/* BUTTONS */}

          <div className={styles.happy_guest__bottom}>

            <button className={styles.happy_guest__viewBtn}>
              View All Merchandise
            </button>

            <div className={styles.happy_guest__arrowButtons}>

              <button>←</button>

              <button className={styles.happy_guest__activeArrow}>
                →
              </button>

            </div>

          </div>

        </div>

      </section>





      {/*PEOPLE SECTION ........ */}
      <section className={styles.people__section}>

        {/* TOP AREA */}

        <div className={styles.people__top}>

          <div className={styles.people__headingWrapper}>

            <h2 className={styles.people__heading}>
              FROM THE
            </h2>

            <div className={styles.people__highlight}>
              <span>PEOPLE OF IMAGICAA</span>
            </div>

          </div>

          <div className={styles.people__tabs}>

            <button className={`${styles.people__tab} ${styles.people__tabActive}`}>
              Celeb Speaks
            </button>

            <button className={styles.people__tab}>
              Community Buzz
            </button>

          </div>

        </div>


        {/* CARDS */}

        <div className={styles.people__cardsWrapper}>

          {
            [1, 2, 3, 4, 5].map((item) => (

              <div className={styles.people__card} key={item}>

                {/* VIDEO BG */}

                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={styles.people__video}
                >
                  <source src={bgVideo} type="video/mp4" />
                </video>


                {/* DARK OVERLAY */}

                <div className={styles.people__overlay}></div>


                {/* TOP TEXT */}

                <div className={styles.people__cardTop}>

                  <div className={styles.people__insta}>
                    @imagicaainstagram
                  </div>

                  <div className={styles.people__views}>
                    421.5K views
                  </div>

                </div>


                {/* PLAY BUTTON */}

                <div className={styles.people__playBtn}>
                  ▶
                </div>


                {/* BOTTOM CONTROLS */}

                <div className={styles.people__controls}>

                  <span>🔈</span>

                  <span>⏸</span>

                  <span>00:10</span>

                </div>

              </div>

            ))
          }

        </div>


        {/* BUTTONS */}

        <div className={styles.people__buttons}>

          <button className={styles.people__circleBtn}>
            ←
          </button>

          <button
            className={`${styles.people__circleBtn} ${styles.people__circleBtnActive}`}
          >
            →
          </button>

        </div>

      </section>





      {/* Questions ---- */}

      <div className={styles.Question}>

        {/* BACKGROUND CIRCLES */}

        <div className={styles.Question__overlay}></div>


        {/* TOP HEADING */}

        <div className={styles.Question__header}>

          <h2 className={styles.Question__heading}>
            QUESTIONS?
          </h2>

          <p className={styles.Question__subheading}>
            WE GOT YOU COVERED!
          </p>

        </div>


        {/* DOG IMAGE */}

        <img
          src={questionDog}
          alt="question dog"
          className={styles.Question__dog}
        />


        {/* TABS */}

        <div className={styles.Question__tabs}>

          <button className={styles.Question__tabActive}>
            Park
          </button>

          <button className={styles.Question__tab}>
            Rules & Safety
          </button>

          <button className={styles.Question__tab}>
            Rides
          </button>

          <button className={styles.Question__tab}>
            How to Reach
          </button>

          <button className={styles.Question__tab}>
            Tickets
          </button>

          <button className={styles.Question__tab}>
            Food
          </button>

        </div>


        {/* FAQ GRID */}

        <div className={styles.Question__faqGrid}>


          {/* LEFT COLUMN */}

          <div className={styles.Question__column}>

            <div className={styles.Question__faqItem}>

              <div className={styles.Question__faqTop}>

                <p>
                  Can I bring outside food and drinks to the Park?
                </p>

                <span>+</span>

              </div>

            </div>


            <div className={styles.Question__faqItem}>

              <div className={styles.Question__faqTop}>

                <p>
                  Up to what age is the entry free at Imagicaa?
                </p>

                <span>+</span>

              </div>

            </div>


            {/* OPEN ITEM */}

            <div className={styles.Question__faqItemOpen}>

              <div className={styles.Question__faqTop}>

                <p>
                  Which rides are suitable for children?
                </p>

                <span>-</span>

              </div>

              <div className={styles.Question__faqAnswer}>

                Rides restrictions are applicable for all rides.
                Rides suitable for children can be found here.

              </div>

            </div>


            <div className={styles.Question__faqItem}>

              <div className={styles.Question__faqTop}>

                <p>
                  Where is the Theme Park located?
                </p>

                <span>+</span>

              </div>

            </div>


            <div className={styles.Question__faqItem}>

              <div className={styles.Question__faqTop}>

                <p>
                  Where is the Theme Park located?
                </p>

                <span>+</span>

              </div>

            </div>

          </div>


          {/* RIGHT COLUMN */}

          <div className={styles.Question__column}>

            <div className={styles.Question__faqItem}>

              <div className={styles.Question__faqTop}>

                <p>
                  Can I bring outside food and drinks to the Park?
                </p>

                <span>+</span>

              </div>

            </div>


            <div className={styles.Question__faqItem}>

              <div className={styles.Question__faqTop}>

                <p>
                  Where is the Theme Park located?
                </p>

                <span>+</span>

              </div>

            </div>


            <div className={styles.Question__faqItem}>

              <div className={styles.Question__faqTop}>

                <p>
                  Which rides are suitable for children?
                </p>

                <span>-</span>

              </div>

            </div>


            <div className={styles.Question__faqItem}>

              <div className={styles.Question__faqTop}>

                <p>
                  Up to what age is the entry free at Imagicaa?
                </p>

                <span>+</span>

              </div>

            </div>


            <div className={styles.Question__faqItem}>

              <div className={styles.Question__faqTop}>

                <p>
                  Can I bring outside food and drinks to the Park?
                </p>

                <span>+</span>

              </div>

            </div>

          </div>

        </div>


        {/* BUTTON */}

        <button className={styles.Question__button}>
          View All Questions
        </button>

      </div>






      {/* FOOOOOOOOOOOOOOOOOOOOOOOOOOTER  */}


      <footer className={styles.footer}>

        {/* OVERLAY */}

        <div className={styles.footer__overlay}></div>


        {/* TOP SECTION */}

        <div className={styles.footer__top}>


          {/* LEFT */}

          <div className={styles.footer__left}>

            <img
              src={logo}
              alt="imagicaa logo"
              className={styles.footer__logo}
            />

            <p className={styles.footer__tagline}>
              India’s Favourite Holiday Destination
            </p>


            {/* SOCIAL ICONS */}

            <div className={styles.footer__socialIcons}>

              <span>📘</span>
              <span>📷</span>
              <span>▶️</span>
              <span>👻</span>
              <span>💼</span>

            </div>


            {/* CONTACT */}

            <h4 className={styles.footer__contactTitle}>
              EMAIL ID & CONTACT
            </h4>

            <p className={styles.footer__contactText}>
              ✉️ customer@imagicaa.com
            </p>

            <p className={styles.footer__contactText}>
              📞 +91 9876543210
            </p>

          </div>


          {/* CENTER */}

          <div className={styles.footer__center}>

            <h4 className={styles.footer__pageTitle}>
              PAGE LINKS
            </h4>


            <div className={styles.footer__linkItem}>

              <span className={styles.footer__linkText}>
                About Us
              </span>

              <span className={styles.footer__linkIcon}>
                +
              </span>

            </div>


            <div className={styles.footer__linkItem}>

              <span className={styles.footer__linkText}>
                Help & Guest Information
              </span>

              <span className={styles.footer__linkIcon}>
                +
              </span>

            </div>


            <div className={styles.footer__linkItem}>

              <span className={styles.footer__linkText}>
                PR & Partnerships
              </span>

              <span className={styles.footer__linkIcon}>
                +
              </span>

            </div>


            <div className={styles.footer__linkItem}>

              <span className={styles.footer__linkText}>
                Licenses
              </span>

              <span className={styles.footer__linkIcon}>
                +
              </span>

            </div>


            <div className={styles.footer__linkItem}>

              <span className={styles.footer__linkText}>
                View Emergency Assist Number
              </span>

              <span className={styles.footer__linkIcon}>
                +
              </span>

            </div>

          </div>


          {/* RIGHT */}

          <div className={styles.footer__right}>

            <h4 className={styles.footer__addressTitle}>
              ADDRESS & TIMINGS
            </h4>


            <p className={styles.footer__addressText}>

              Registered Address: 30/31 Sangdewadi,
              Khopoli-Pali Road, Near Lonavala,
              Khalapur, 410203, Maharashtra, India.

            </p>


            <p className={styles.footer__timingText}>

              Theme Park timing 11:00 - 7:30 PM
              <br />
              Water Park timing 10:30 - 6:30 PM

            </p>


            <h4 className={styles.footer__essentialTitle}>
              ESSENTIAL PAGES
            </h4>


            <div className={styles.footer__essentialLinks}>

              <span className={styles.footer__essentialLink}>
                Terms & Conditions
              </span>

              <span className={styles.footer__essentialLink}>
                Park Rules
              </span>

              <span className={styles.footer__essentialLink}>
                Privacy Policy
              </span>

            </div>

          </div>

        </div>


        {/* CHARACTERS */}

        <div className={styles.footer__characters}>

          <img
            src={cartoon1}
            alt="cartoon1"
            className={styles.footer__characterImage}
          />

          <img
            src={cartoon2}
            alt="cartoon2"
            className={styles.footer__characterImage}
          />

          <img
            src={cartoon3}
            alt="cartoon3"
            className={styles.footer__characterImage}
          />

        </div>


        {/* BOTTOM */}

        <div className={styles.footer__bottom}>

          <p className={styles.footer__copyright}>
            © Imagicaa LTD. All rights reserved.
          </p>

          <p className={styles.footer__credit}>
            Carefully crafted by 3minds
          </p>

        </div>

      </footer>
    </div>
  );
}

export default App;