import classNames from "classnames/bind";

import * as styles from "./About.module.scss";

const c = classNames.bind(styles);

const About = () => {
    return (
        <article className={c("about")}>
            <div className={c("container")}>
                <h2 className={c("title")}>ABOUT</h2>
                <p className={c("desc")}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem animi minus totam eligendi in facilis quam blanditiis
                    enim nesciunt porro. Minima dicta facere accusantium
                    quaerat. Praesentium at modi facere architecto!
                </p>
            </div>
        </article>
    );
};

export default About;
