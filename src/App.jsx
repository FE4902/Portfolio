import classNames from "classnames";

import Header from "@layouts/Header/Header";
import FloatMenu from "@layouts/FloatMenu/FloatMenu";

import Main from "@articles/Main/Main";

import * as styles from "./App.module.scss";

const c = classNames.bind(styles);

const App = () => {
    return (
        <div className={c("wrap")}>
            <Header />
            <main>
                <Main />
            </main>
            <FloatMenu />
        </div>
    );
};

export default App;
