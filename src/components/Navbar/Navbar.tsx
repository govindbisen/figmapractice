import styles from './Navbar.module.css';

import logo from '../../assets/images/imagicaa_logo.png';

import {
    MdPark,
    MdLocalOffer,
    MdDirectionsCar,
    MdMap,
    MdHotel,
    MdCelebration,
} from 'react-icons/md';

const navItems = [
    {
        label: 'Parks',
        icon: <MdPark />,
    },
    {
        label: 'Offers',
        icon: <MdLocalOffer />,
    },
    {
        label: 'Rides',
        icon: <MdDirectionsCar />,
    },
    {
        label: 'Plan Visits',
        icon: <MdMap />,
    },
    {
        label: 'Stay',
        icon: <MdHotel />,
    },
    {
        label: 'Events',
        icon: <MdCelebration />,
    },
];

function Navbar() {
    return (
        <nav className={styles.navbar}>
            {/* LEFT */}
            <div className={styles.logoWrapper}>
                <img
                    src={logo}
                    alt="Imagicaa Logo"
                    className={styles.logo}
                />
            </div>

            {/* CENTER */}
            <div className={styles.navCenter}>
                <div className={styles.navLinks}>
                    {navItems.map((item) => (
                        <div
                            key={item.label}
                            className={styles.navItem}
                        >
                            <span className={styles.icon}>
                                {item.icon}
                            </span>

                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT */}
            <div className={styles.bookWrapper}>
                <button className={styles.bookBtn}>
                    <span>Book</span>
                    <span>Now</span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;