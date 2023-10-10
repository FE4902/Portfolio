import classNames from "classnames/bind";

import * as styles from "./FloatMenu.module.scss";

const c = classNames.bind(styles);

const FloatMenu = () => {
    return (
        <div className={c("floatMenu")}>
            <div className={c("container")}>
                <ul className={c("menu__list")}>
                    <li className={c("menu__item", "active")}>
                        <a className={c("menu__link")} href="#main">
                            Main
                        </a>
                    </li>
                    <li className={c("menu__item")}>
                        <a className={c("menu__link")} href="#about">
                            About
                        </a>
                    </li>
                    <li className={c("menu__item")}>
                        <a className={c("menu__link")} href="#work">
                            Work
                        </a>
                    </li>
                    <li className={c("menu__item")}>
                        <a className={c("menu__link")} href="#blog">
                            Blog
                        </a>
                    </li>
                    <li className={c("menu__item")}>
                        <a className={c("menu__link")} href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FloatMenu;
