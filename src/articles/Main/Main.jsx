import classNames from "classnames/bind";
import { motion } from "framer-motion";

import * as styles from "./Main.module.scss";

const c = classNames.bind(styles);

const Main = () => {
    const animation = {
        container: {
            inactive: {
                opacity: 0,
            },
            active: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.3,
                    duration: 0.3,
                },
            },
        },
        fadeInUp: {
            inactive: {
                opacity: 0,
                y: 60,
            },
            active: {
                opacity: 1,
                y: 0,
            },
        },
    };

    return (
        <article className={c("main")}>
            <motion.div
                className={c("container")}
                variants={animation.container}
                initial="inactive"
                whileInView="active"
            >
                <motion.h2 className={c("title")} variants={animation.fadeInUp}>
                    고구마
                </motion.h2>
                <motion.h2 className={c("title")} variants={animation.fadeInUp}>
                    케이크
                </motion.h2>
                <motion.h2 className={c("title")} variants={animation.fadeInUp}>
                    꽈배기
                </motion.h2>
                <motion.h2 className={c("title")} variants={animation.fadeInUp}>
                    안주홍꺼
                </motion.h2>
            </motion.div>
        </article>
    );
};

export default Main;
