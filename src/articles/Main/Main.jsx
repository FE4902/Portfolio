import classNames from "classnames/bind";
import { motion } from "framer-motion";

import Bracket from "../../components/Bracket/Bracket";
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
                <Bracket containerDelay={0.6} textDelay={0.9}>
                    웹 퍼블리셔, UI 개발자
                    <br />
                    안주홍 포트폴리오
                </Bracket>
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
