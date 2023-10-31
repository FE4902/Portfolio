import classNames from "classnames/bind";

import Header from "@layouts/Header/Header";

import Main from "@articles/Main/Main";
import About from "@articles/About/About";
import Work from "@articles/Work/Work";
import Blog from "@articles/Blog/Blog";
import Contact from "@articles/Contact/Contact";

import * as styles from "./App.module.scss";

const c = classNames.bind(styles);

const App = () => {
    return (
        <div className={c("wrap")}>
            <Header />
            <main className={c("main")}>
                <Main />
                <About />
                <Work />
                <Blog />
                <Contact />
            </main>
        </div>
    );
};

export default App;
