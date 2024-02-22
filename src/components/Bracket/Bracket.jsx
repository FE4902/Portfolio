import classNames from "classnames/bind";
import { motion } from "framer-motion";

import * as styles from "./Bracket.module.scss";

const c = classNames.bind(styles);

const Bracket = ({
    children,
    containerDelay = 0,
    textDelay = 0.3,
    className,
}) => {
    const animation = {
        container: {
            inactive: {
                opacity: 0,
            },
            active: {
                opacity: 1,
                transition: {
                    delay: containerDelay,
                    duration: 0.3,
                },
            },
        },
        fadeIn: {
            inactive: {
                width: 30,
                opacity: 0,
            },
            active: {
                width: "auto",
                opacity: 1,
                transition: {
                    delay: textDelay,
                    duration: 0.3,
                },
            },
        }
    }

    return (
        <motion.div
            className={c("bracket", className)}
            variants={animation.container}
            initial="inactive"
            whileInView="active"
        >
            <svg
                width="16"
                height="80"
                viewBox="0 0 16 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16 80H0V0H16V6.60548H6.14286V73.3945H16V80Z"
                    fill="#fff"
                />
            </svg>
            <motion.h2 variants={animation.fadeIn}>{children}</motion.h2>
            <svg
                width="16"
                height="80"
                viewBox="0 0 16 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 0h16v80H0v-6.606h9.857V6.605H0V0Z" fill="#fff" />
            </svg>
        </motion.div>
    );
};

export default Bracket;
