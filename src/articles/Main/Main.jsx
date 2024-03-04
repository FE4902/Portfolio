import classNames from "classnames/bind";

import * as styles from "./Main.module.scss";

const c = classNames.bind(styles);

const Main = () => {
    return (
        <article className={c("main")}>
            <div className={c("container")}>
                <h2 className={c("title")}>ANJUHONG</h2>
                <div className={c("text")}>
                    <span>안정적인 UI, 인상적인 UX를 만드는</span>
                    <span>어디서나 잘 녹아드는 웹 퍼블리셔</span>
                </div>
            </div>
        </article>
    );
};

export default Main;
