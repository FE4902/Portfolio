import classNames from "classnames/bind";
import { motion } from "framer-motion";

import * as styles from "./Background.module.scss";

const c = classNames.bind(styles);

const ani = {
    initial: {
        opacity: 1,
    },
    active: (i) => ({
        opacity: 0,
        transition: { duration: 0, delay: 0.05 * i },
    }),
    inactive: (i) => ({
        opacity: 1,
        transition: { duration: 0, delay: 0.05 * i },
    }),
};

const Background = ({ isActive }) => {
    /**
     * Shuffles array in place (Fisher–Yates shuffle).
     * @param {Array} a items An array containing the items.
     */
    const shuffle = (a) => {
        let j, x, i;

        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }

        return a;
    };

    const getBlocks = () => {
        const { innerWidth, innerHeight } = window;
        const size = innerWidth * 0.05;
        const amount = Math.ceil(innerHeight / size);
        const shuffledIndex = shuffle([...Array(amount)].map((_, i) => i));

        return shuffledIndex.map((randomIndex, i) => {
            return (
                <motion.div
                    key={i}
                    className={c("block")}
                    variants={ani}
                    initial={"initial"}
                    animate={isActive ? "active" : "inactive"}
                    custom={randomIndex}
                ></motion.div>
            );
        });
    };

    return (
        <div className={c("background")}>
            {[...Array(20)].map((_, i) => {
                return (
                    <div className={c("column")} key={i}>
                        {getBlocks()}
                    </div>
                );
            })}
        </div>
    );
};

export default Background;
