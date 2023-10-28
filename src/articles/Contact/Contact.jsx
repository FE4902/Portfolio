import classNames from "classnames/bind";

import * as styles from "./Contact.module.scss";
import Background from "../../components/Background/Background";

const c = classNames.bind(styles);

const Contact = () => {
    return (
        <article id="contact" className={c("contact")}>
            <Background />
            <h2>CONTACT</h2>
            <p>안주홍</p>
            <p>WEB PUBLISHER</p>
            <p>UI DEVELOPER</p>
            <p>KAKAOTALK</p>
            <p>GITHUB</p>
            <p>TISTORY</p>
        </article>
    );
};

export default Contact;
