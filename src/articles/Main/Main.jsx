import classNames from "classnames/bind";
import { motion } from "framer-motion";

import * as styles from "./Main.module.scss";

const c = classNames.bind(styles);

const Main = () => {
    const button = {
        inactive: {
            y: 30,
            opacity: 0,
        },
        active: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.3,
            },
        },
    };
    return (
        <article className={c("main")}>
            <div className={c("container")}>
                <SplitText />
                {/* <SplitText>UI&nbsp;DEVELOPER</SplitText> */}
                <Bracket />
                <motion.button
                    className={c("button")}
                    variants={button}
                    initial="inactive"
                    whileInView="active"
                >
                    채용하기
                </motion.button>
            </div>
        </article>
    );
};

export default Main;

const SplitText = () => {
    const container = {
        inactive: {},
        active: {
            transition: {
                duration: 0.3,
                staggerChildren: 0.1,
            },
        },
    };

    const text = {
        inactive: {
            opacity: 0,
            x: 30,
        },
        active: {
            opacity: 1,
            x: 0,
        },
    };

    return (
        <motion.div
            className={c("title")}
            variants={container}
            initial="inactive"
            whileInView="active"
        >
            <div>
                {[..."PUBLISHER"].map((v, i) => {
                    return (
                        <motion.span key={i} variants={text}>
                            {v}
                        </motion.span>
                    );
                })}
            </div>
            <div>
                {[..."PORTFOLIO"].map((v, i) => {
                    return (
                        <motion.span key={i} variants={text}>
                            {v}
                        </motion.span>
                    );
                })}
            </div>
        </motion.div>
    );
};

const Bracket = () => {
    const container = {
        inactive: {
            opacity: 0,
        },
        active: {
            opacity: 1,
            transition: {
                delay: 0.6,
                duration: 0.3,
            },
        },
    };

    const text = {
        inactive: {
            width: 50,
            opacity: 0,
        },
        active: {
            width: "auto",
            opacity: 1,
            transition: {
                delay: 0.9,
                duration: 0.3,
            },
        },
    };

    return (
        <motion.div
            className={c("bracket")}
            variants={container}
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
            <motion.span variants={text}>
                웹 퍼블리셔, UI 개발자
                <br />
                안주홍 포트폴리오
            </motion.span>
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
