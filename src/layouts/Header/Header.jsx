import classNames from "classnames/bind";

import Magnetic from "../../components/Magnetic/Magnetic";

import * as styles from "./Header.module.scss";

const c = classNames.bind(styles);

const Header = () => {
    return (
        <header className={c("header")}>
            <div className={c("container")}>
                <Magnetic>
                    <h1 className={c("logo")}>ANJUHONG</h1>
                </Magnetic>
            </div>
        </header>
    );
};

export default Header;
