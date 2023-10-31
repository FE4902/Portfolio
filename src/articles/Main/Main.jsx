import { useState } from "react";
import classNames from "classnames/bind";
import { motion } from "framer-motion";

import Background from "../../components/Background/Background";
import Bracket from "../../components/Bracket/Bracket";

import * as styles from "./Main.module.scss";

const c = classNames.bind(styles);

const Main = () => {
    const text = {
        inactive: {
            opacity: 0,
            x: 60,
        },
        active: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <article className={c("main")}>
            <div className={c("container")}>
                <motion.div
                    className={c("title")}
                    variants={text}
                    initial="inactive"
                    whileInView="active"
                >
                    {[..."PUBLISHER"].map((v, i) => {
                        return <span key={i}>{v}</span>;
                    })}
                </motion.div>
                <Bracket
                    className={c("bracket")}
                    containerDelay={0.3}
                    textDelay={0.6}
                >
                    PORTFOLIO
                </Bracket>
            </div>
        </article>
    );
};

export default Main;
