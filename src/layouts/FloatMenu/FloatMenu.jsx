import classNames from "classnames/bind";

import * as styles from "./FloatMenu.module.scss";

const c = classNames.bind(styles);

const FloatMenu = () => {
    return (
        <div className={c("floatMenu")}>
            <ul className={c("list")}>
                <li className={c("item", "active")}>
                    <a className={c("link")} href="#Main">
                        Main
                    </a>
                </li>
                <li className={c("item")}>
                    <a className={c("link")} href="#About">
                        About
                    </a>
                </li>
                <li className={c("item")}>
                    <a className={c("link")} href="#Work">
                        Work
                    </a>
                </li>
                <li className={c("item")}>
                    <a className={c("link")} href="#Blog">
                        Blog
                    </a>
                </li>
                <li className={c("item")}>
                    <a className={c("link")} href="#Contact">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FloatMenu;
