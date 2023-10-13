import classNames from "classnames/bind";

import * as styles from "./Main.module.scss";

const c = classNames.bind(styles);

const Main = () => {
    return (
        <article className={c("main")}>
            <h2>WEB PUBLISHER</h2>
            <p>AND</p>
            <p>UI DEVELOPER</p>
        </article>
    );
};

export default Main;
