import { useRef } from "react";
import classNames from "classnames/bind";
import { motion, useScroll, useTransform } from "framer-motion";

import * as styles from "./Introduce.module.scss";

const c = classNames.bind(styles);

const Introduce = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0", "1"],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
    const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const translateXReverse = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "-100%"]
    );

    return (
        <article className={c("introduce")} ref={ref}>
            <div className={c("container")}>
                <motion.div className={c("text")} style={{ translateX }}>
                    안녕하세요! 저는
                </motion.div>
                <motion.h2 className={c("role")}>
                    <span>PUBLISHER</span>
                    <span>UI DEVELOPER</span>
                </motion.h2>
                <motion.div
                    className={c("text")}
                    style={{ translateX: translateXReverse }}
                >
                    입니다.
                </motion.div>
                <motion.div className={c("name")} style={{ translateY }}>
                    ANJUHONG
                </motion.div>
            </div>
        </article>
    );
};

export default Introduce;
