import React, { useMemo, useState } from "react";
import styles from "./ThemeParkVideoShowcaseCarousel.module.css";
import themeParkShowcaseBgVideo from "../src/assets/video/bgvideo.mp4";

export default function ThemeParkVideoShowcaseCarousel() {
  const [themeParkShowcaseCards, setThemeParkShowcaseCards] = useState([
    {
      id: "theme-park-showcase-card-1",
      heading:
        "Experience Thrilling Roller Coaster Adventures With Friends And Family",
      content:
        "Enjoy exciting roller coaster rides, adventure zones, and entertainment activities designed for visitors of all age groups. Create unforgettable memories with family and friends while exploring fun attractions, live performances, and thrilling experiences throughout the park.",
    },
    {
      id: "theme-park-showcase-card-2",
      heading:
        "Discover Water Rides And Splash Activities During Summer Vacation",
      content:
        "Cool off with exciting water slides, wave pools, and splash zones perfect for summer adventures. Enjoy relaxing pools, fun-filled rides, and safe water attractions that provide entertainment and refreshment for children and adults alike.",
    },
    {
      id: "theme-park-showcase-card-3",
      heading:
        "Enjoy Delicious Food Courts And Relaxing Dining Areas Inside Park",
      content:
        "Taste a variety of delicious snacks, meals, and beverages available across themed food courts and restaurants. Relax in comfortable dining spaces while enjoying quality food options suitable for families, kids, and large visitor groups.",
    },
    {
      id: "theme-park-showcase-card-4",
      heading:
        "Explore Family Friendly Entertainment Shows And Interactive Attractions Daily",
      content:
        "Watch live entertainment shows, musical performances, and interactive activities designed to engage every visitor. Experience family-friendly attractions, colorful parades, and engaging events that make every visit enjoyable and memorable for all age groups.",
    },
    {
      id: "theme-park-showcase-card-5",
      heading:
        "Book Exciting Theme Park Tickets Online For Amazing Weekend Fun",
      content:
        "Reserve your theme park tickets online easily and plan an exciting weekend adventure. Get access to thrilling rides, entertainment zones, food courts, and family activities while enjoying a smooth and hassle-free booking experience.",
    },
  ]);

  const themeParkShowcaseActiveIndex = Math.floor(
    themeParkShowcaseCards.length / 2,
  );

  const handleThemeParkShowcasePrev = () => {
    setThemeParkShowcaseCards((previousThemeParkShowcaseCards) => {
      const updatedThemeParkShowcaseCards = [...previousThemeParkShowcaseCards];
      const lastThemeParkShowcaseCard = updatedThemeParkShowcaseCards.pop();

      updatedThemeParkShowcaseCards.unshift(lastThemeParkShowcaseCard);
      return updatedThemeParkShowcaseCards;
    });
  };

  const handleThemeParkShowcaseNext = () => {
    setThemeParkShowcaseCards((previousThemeParkShowcaseCards) => {
      const updatedThemeParkShowcaseCards = [...previousThemeParkShowcaseCards];
      const firstThemeParkShowcaseCard = updatedThemeParkShowcaseCards.shift();

      updatedThemeParkShowcaseCards.push(firstThemeParkShowcaseCard);
      return updatedThemeParkShowcaseCards;
    });
  };

  const themeParkShowcasePositionedCards = useMemo(() => {
    return themeParkShowcaseCards.map(
      (themeParkShowcaseCard, themeParkShowcaseCardIndex) => {
        let themeParkShowcaseCardOffset =
          themeParkShowcaseCardIndex - themeParkShowcaseActiveIndex;

        if (themeParkShowcaseCardOffset < -2) {
          themeParkShowcaseCardOffset += themeParkShowcaseCards.length;
        }

        if (themeParkShowcaseCardOffset > 2) {
          themeParkShowcaseCardOffset -= themeParkShowcaseCards.length;
        }

        return {
          ...themeParkShowcaseCard,
          themeParkShowcaseCardOffset,
        };
      },
    );
  }, [themeParkShowcaseCards, themeParkShowcaseActiveIndex]);

  return (
    <div className={styles.themeParkShowcaseCarouselWrapper}>
      <div className={styles.themeParkShowcaseCarouselTrack}>
        {themeParkShowcasePositionedCards.map((themeParkShowcaseCard) => (
          <article
            key={themeParkShowcaseCard.id}
            className={`${styles.themeParkShowcaseCarouselCard}
              ${themeParkShowcaseCard.themeParkShowcaseCardOffset === 0
                ? styles.themeParkShowcaseCarouselCardActive
                : ""
              }
              ${themeParkShowcaseCard.themeParkShowcaseCardOffset === -1
                ? styles.themeParkShowcaseCarouselCardNearLeft
                : ""
              }
              ${themeParkShowcaseCard.themeParkShowcaseCardOffset === -2
                ? styles.themeParkShowcaseCarouselCardFarLeft
                : ""
              }
              ${themeParkShowcaseCard.themeParkShowcaseCardOffset === 1
                ? styles.themeParkShowcaseCarouselCardNearRight
                : ""
              }
              ${themeParkShowcaseCard.themeParkShowcaseCardOffset === 2
                ? styles.themeParkShowcaseCarouselCardFarRight
                : ""
              }
              ${Math.abs(themeParkShowcaseCard.themeParkShowcaseCardOffset) > 2
                ? styles.themeParkShowcaseCarouselCardHidden
                : ""
              }`}
          >
            <video
              className={styles.themeParkShowcaseCarouselCardVideo}
              src={themeParkShowcaseBgVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />

            <div className={styles.themeParkShowcaseCarouselCardOverlay}></div>

            <div className={styles.themeParkShowcaseCarouselCardContent}>
              <span className={styles.themeParkShowcaseCarouselCardBadge}>
                Park Highlight
              </span>

              <h3 className={styles.themeParkShowcaseCarouselCardHeading}>
                {themeParkShowcaseCard.heading}
              </h3>

              <p className={styles.themeParkShowcaseCarouselCardDescription}>
                {themeParkShowcaseCard.content}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.themeParkShowcaseCarouselButtons}>
        <button
          type="button"
          className={styles.themeParkShowcaseCarouselButton}
          onClick={handleThemeParkShowcasePrev}
          aria-label="Previous showcase card"
        >
          ←
        </button>

        <button
          type="button"
          className={styles.themeParkShowcaseCarouselButton}
          onClick={handleThemeParkShowcaseNext}
          aria-label="Next showcase card"
        >
          →
        </button>
      </div>
    </div>
  );
}
