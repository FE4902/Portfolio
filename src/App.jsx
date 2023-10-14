import classNames from "classnames/bind";

import Header from "@layouts/Header/Header";
// import FloatMenu from "@layouts/FloatMenu/FloatMenu";

import Main from "@articles/Main/Main";
import About from "@articles/About/About";
import Work from "@articles/Work/Work";
import Blog from "@articles/Blog/Blog";
import Contact from "@articles/Contact/Contact";
import Background from "@components/Background/Background";

import * as styles from "./App.module.scss";

const c = classNames.bind(styles);

const App = () => {
    return (
        <div className={c("wrap")}>
            <Header />
            <Background />
            <main>
                <Main />
                <Work />
                <About />
                <Blog />
                <Contact />
            </main>

            {/* <FloatMenu /> */}
        </div>
    );
};

export default App;