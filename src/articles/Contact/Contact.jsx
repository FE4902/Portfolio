import classNames from "classnames/bind";
import { motion } from "framer-motion";

import Bracket from "../../components/Bracket/Bracket";
import Magnetic from "../../components/Magnetic/Magnetic";

import * as styles from "./Contact.module.scss";

const c = classNames.bind(styles);

const Contact = () => {
    return (
        <motion.article className={c("contact")}>
            <div className={c("container")}>
                <Bracket>CONTACT</Bracket>
                <div className={c("desc")}>
                    enim nesciunt porro. Minima dicta facere accusantium
                    quaerat. Praesentium at modi facere architecto! Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Sapiente,
                    asperiores aliquam! Labore possimus exercitationem omnis sed
                    neque reprehenderit accusamus dignissimos, ex officia
                    repudiandae alias culpa, autem,
                </div>
                <motion.div
                    className={c("list")}
                    initial="inactive"
                    whileInView="active"
                >
                    <Magnetic>
                        <a
                            className={c("button")}
                            href="https://open.kakao.com/o/sJvCYbcf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            KAKAOTALK
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a
                            className={c("button")}
                            href="https://github.com/FE4902"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GITHUB
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a
                            className={c("button")}
                            href="https://fe4902.tistory.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            TISTORY
                        </a>
                    </Magnetic>
                </motion.div>
            </div>
        </motion.article>
    );
};

export default Contact;
