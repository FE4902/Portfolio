import classNames from "classnames/bind";
import { motion } from "framer-motion";

import Bracket from "@components/Bracket/Bracket";
import Button from "@components/Button/Button";

import * as styles from "./Contact.module.scss";

const c = classNames.bind(styles);

const Contact = () => {
    return (
        <motion.article className={c("contact")}>
            <div className={c("container")}>
                <div className={c("inner")}>
                    <Bracket>CONTACT</Bracket>
                    <div className={c("desc")}>
                        enim nesciunt porro. Minima dicta facere accusantium
                        quaerat. Praesentium at modi facere architecto! Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente, asperiores aliquam! Labore possimus
                        exercitationem omnis sed neque reprehenderit accusamus
                        dignissimos, ex officia repudiandae alias culpa, autem,
                    </div>
                    <div className={c("button")}>
                        <Button href="https://open.kakao.com/o/sJvCYbcf">
                            KAKAOTALK
                        </Button>
                        <Button href="mailto:isdn000123@gmail.com">
                            EMAIL
                        </Button>
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export default Contact;
