import classNames from "classnames/bind";

import * as styles from "./About.module.scss";

const c = classNames.bind(styles);

const About = () => {
    return <article className={c("about")}></article>;
};

export default About;
