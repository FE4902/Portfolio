import classNames from "classnames/bind";
import { motion } from "framer-motion";

import Magnetic from "@components/Magnetic/Magnetic";

import * as styles from "./Header.module.scss";

const c = classNames.bind(styles);

const Header = () => {
    const fadeIn = {
        inactive: {
            opacity: 0,
        },
        active: {
            opacity: 1,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <header>
            <motion.h1
                className={c("logo")}
                variants={fadeIn}
                initial="inactive"
                whileInView="active"
            >
                <Magnetic>
                    <a href="#">ANJUHONG</a>
                </Magnetic>
            </motion.h1>
            <motion.span
                className={c("github")}
                variants={fadeIn}
                initial="inactive"
                whileInView="active"
            >
                <Magnetic>
                    <a
                        href="https://github.com/FE4902"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GITHUB
                    </a>
                </Magnetic>
            </motion.span>
            <motion.span
                className={c("resume")}
                variants={fadeIn}
                initial="inactive"
                whileInView="active"
            >
                <Magnetic>
                    <a
                        href="https://www.notion.so/fe4902/355c6e1d703f49b89e56d9720f187630?pvs=4"
                        target="_blank"
                        rel="noreferrer"
                    >
                        RESUME
                    </a>
                </Magnetic>
            </motion.span>
        </header>
    );
};

export default Header;
