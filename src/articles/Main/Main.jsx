import classNames from "classnames/bind";

import * as styles from "./Main.module.scss";

const c = classNames.bind(styles);

const Main = () => {
    return (
        <article className={c("main")}>
            <div className={c("container")}>
                <h2 className={c("title")}>ANJUHONG</h2>
                <div className={c("text")}>
                    <span>안정적인 UI, 인상적인 UX</span>
                    <span>성장하는, 기록하는</span>
                </div>
            </div>
        </article>
    );
};

export default Main;
