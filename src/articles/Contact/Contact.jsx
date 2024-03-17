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
                        마크업 및 UI 개발 관련 이야기, 포트폴리오 피드백 등
                        <br />
                        개발 이야기가 아니더라도 이야기를 나누고 싶으시다면
                        <br />
                        편하게 연락주세요.
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
