import classNames from "classnames/bind";

import * as styles from "./Header.module.scss";

const c = classNames.bind(styles);

const Header = () => {
    return (
        <header className={c("header")}>
            <div className={c("container")}>
                <h1 className={c("logo")}>퍼블리셔 안주홍</h1>
                <ul className={c("menu__list")}>
                    <li className={c("menu__item")}>
                        <a
                            className={c("menu__link")}
                            href="https://github.com/FE4902"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="/github.svg" alt="github icon" />
                        </a>
                    </li>
                    <li className={c("menu__item")}>
                        <a
                            className={c("menu__link")}
                            href="https://fe4902.tistory.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="/tistory.svg" alt="tistory icon" />
                        </a>
                    </li>
                    <li className={c("menu__item")}>
                        <a
                            className={c("menu__link")}
                            href="https://open.kakao.com/o/sJvCYbcf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="/kakao.svg" alt="kakao icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
