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
        },
    };

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
                    <div>
                        디자이너와 개발자 사이에서 다리 역할을 하면서, 웹 개발이
                        팀워크를 필요로 하는 일임을 자연스럽게 깨달았습니다.
                        팀워크를 위해{" "}
                        {[..."기술적인 능력과 소통 능력"].map(
                            (value, index) => {
                                return (
                                    <motion.span
                                        key={index}
                                        variants={animation.textColor}
                                    >
                                        {value}
                                    </motion.span>
                                );
                            }
                        )}{" "}
                        모두 중요하다는 것을 이해하게 되었으며, 이 두 가지
                        능력을 갖추기 위해 사이드 프로젝트를 진행하거나 온라인
                        강의를 듣는 등 지속적으로 학습하고 있습니다.
                    </div>
                    <div>
                        앞으로도 팀원들과 긴밀히 협력하고 원활하게 소통하며,
                        <br />
                        {[..."안정적인 UI와 인상적인 UX"].map(
                            (value, index) => {
                                return (
                                    <motion.span
                                        key={index}
                                        variants={animation.textColorFadeInUp}
                                    >
                                        {value}
                                    </motion.span>
                                );
                            }
                        )}
                        를 제공하는 퍼블리셔가 되도록 노력하겠습니다.
                    </div>
                </motion.div>
                <div className={c("button")}>
                    <Button href="https://www.notion.so/fe4902/355c6e1d703f49b89e56d9720f187630?pvs=4">
                        이력서 보러가기
                    </Button>
                </div>
            </div>
        </article>
    );
};

export default About;
