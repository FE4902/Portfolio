import classNames from "classnames/bind";
import { motion } from "framer-motion";

import Bracket from "@components/Bracket/Bracket";
import Button from "@components/Button/Button";

import * as styles from "./About.module.scss";

const c = classNames.bind(styles);

const About = () => {
    const container = {
        inactive: {},
        active: {
            transition: {
                delayChildren: 0.6,
                duration: 0.05,
                staggerChildren: 0.05,
            },
        },
    };

    const textColor = {
        inactive: {
            color: "rgba(255, 255, 255, 1)",
        },
        active: {
            color: [
                "rgba(255, 255, 255, 1)",
                "rgba(254, 73, 2, 1)",
                "rgba(254, 73, 2, 1)",
                "rgba(255, 255, 255, 1)",
            ],
        },
    };

    const textY = {
        inactive: {
            opacity: 0,
            color: "rgba(255, 255, 255, 1)",
            y: 30,
        },
        active: {
            opacity: [0, 1, 1, 1],
            color: [
                "rgba(255, 255, 255, 1)",
                "rgba(254, 73, 2, 1)",
                "rgba(254, 73, 2, 1)",
                "rgba(255, 255, 255, 1)",
            ],
            y: [30, 0, 0, 0],
        },
    };

    return (
        <article className={c("about")}>
            <div className={c("container")}>
                <Bracket>ABOUT</Bracket>
                <motion.div
                    className={c("desc")}
                    variants={container}
                    initial="inactive"
                    whileInView={["visible", "active"]}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem animi minus totam eligendi in
                    {[..."facilis quam blanditiis"].map((v, i) => {
                        return (
                            <motion.span key={i} variants={textColor}>
                                {v}
                            </motion.span>
                        );
                    })}
                    enim nesciunt porro. Minima dicta facere accusantium
                    quaerat. Praesentium at modi facere architecto! Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Sapiente,
                    asperiores aliquam! Labore possimus exercitationem omnis sed
                    neque reprehenderit accusamus dignissimos, ex officia
                    repudiandae alias culpa, autem,
                    {[..."commodi debitis illo voluptatibus!"].map((v, i) => {
                        return (
                            <motion.span key={i} variants={textY}>
                                {v}
                            </motion.span>
                        );
                    })}
                </motion.div>
                <div className={c("list")}>
                    <Button href='https://open.kakao.com/o/sJvCYbcf'>
                        더 보기
                    </Button>
                </div>
            </div>
        </article>
    );
};

export default About;
