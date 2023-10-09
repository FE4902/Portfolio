import classNames from "classnames/bind";

import * as styles from "./Footer.module.scss";

const c = classNames.bind(styles);

const Footer = () => {
    return (
        <footer className={c("footer")}>
            <address className={c("copyright")}>
                &copy; 2023 An-Ju-Hong. All Rights Reserved.
            </address>
        </footer>
    );
};

export default Footer;
