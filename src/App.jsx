import classNames from "classnames";

import Header from "@layouts/Header/Header";

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
        </div>
    );
};

export default App;
