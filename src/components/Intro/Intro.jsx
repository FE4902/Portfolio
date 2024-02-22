import { useEffect } from "react";
import classNames from "classnames/bind";
import { motion } from "framer-motion";

import * as styles from "./Intro.module.scss";

const c = classNames.bind(styles);

const Intro = ({ setIntroCompleted }) => {
    const fadeOut = {
        initial: {
            opacity: 1,
        },
        inactive: (i) => ({
            opacity: 1,
            transition: { duration: 0, delay: 0.05 * i },
        }),
        active: (i) => ({
            opacity: 0,
            transition: { duration: 0, delay: 0.05 * i },
        }),
    };

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

        return shuffledIndex.map((randomIndex, index) => {
            return (
                <motion.div
                    key={index}
                    className={c("block")}
                    variants={fadeOut}
                    initial="inactive"
                    animate="active"
                    custom={randomIndex}
                ></motion.div>
            );
        });
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIntroCompleted(true);
        }, 1100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={c("intro")}>
            {[...Array(20)].map((_, index) => {
                return (
                    <div className={c("column")} key={index}>
                        {getBlocks()}
                    </div>
                );
            })}
        </div>
    );
};

export default Intro;
