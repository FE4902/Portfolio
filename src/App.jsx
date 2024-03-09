import { useEffect } from "react";
import lenis from "@utils/lenis";

import Header from "@layouts/Header/Header";
import Main from "@articles/Main/Main";
import Introduce from "@articles/Introduce/Introduce";
import About from "@articles/About/About";
import Work from "@articles/Work/Work";
import Blog from "@articles/Blog/Blog";
import Contact from "@articles/Contact/Contact";

const App = () => {
    useEffect(() => {
        lenis();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Main />
                <Introduce />
                <About />
                <Work />
                <Blog />
                <Contact />
            </main>
        </>
    );
};

export default App;
