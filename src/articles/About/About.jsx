import classNames from "classnames/bind";
import { motion } from "framer-motion";

import Bracket from "@components/Bracket/Bracket";
import Button from "@components/Button/Button";

import * as styles from "./About.module.scss";

const c = classNames.bind(styles);

const About = () => {
    const animation = {
        container: {
            inactive: {},
            active: {
                transition: {
                    delayChildren: 0.6,
                    duration: 0.05,
                    staggerChildren: 0.05,
                },
            },
        },
        textColor: {
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
        },
        textColorFadeInUp: {
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
        }
    }

    return (
        <article className={c("about")}>
            <div className={c("container")}>
                <Bracket>ABOUT</Bracket>
                <motion.div
                    className={c("desc")}
                    variants={animation.container}
                    initial="inactive"
                    whileInView="active"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem animi minus totam eligendi in
                    {[..."facilis quam blanditiis"].map((value, index) => {
                        return (
                            <motion.span key={index} variants={animation.textColor}>
                                {value}
                            </motion.span>
                        );
                    })}
                    enim nesciunt porro. Minima dicta facere accusantium
                    quaerat. Praesentium at modi facere architecto! Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Sapiente,
                    asperiores aliquam! Labore possimus exercitationem omnis sed
                    neque reprehenderit accusamus dignissimos, ex officia
                    repudiandae alias culpa, autem,
                    {[..."commodi debitis illo voluptatibus!"].map((value, index) => {
                        return (
                            <motion.span key={index} variants={animation.textColorFadeInUp}>
                                {value}
                            </motion.span>
                        );
                    })}
                </motion.div>
                <div className={c("button")}>
                    <Button href="https://open.kakao.com/o/sJvCYbcf">
                        이력서 보러가기
                    </Button>
                </div>
            </div>
        </article>
    );
};

export default About;
