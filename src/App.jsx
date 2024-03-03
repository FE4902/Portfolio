import { useEffect, useState } from "react";
import lenis from "@utils/lenis";

import Intro from "@components/Intro/Intro";
import Header from "@layouts/Header/Header";
import Main from "@articles/Main/Main";
import Introduce from "@articles/Introduce/Introduce";
import About from "@articles/About/About";
import Work from "@articles/Work/Work";
import Blog from "@articles/Blog/Blog";
import Contact from "@articles/Contact/Contact";

const App = () => {
    const [introCompleted, setIntroCompleted] = useState(false);

    useEffect(() => {
        lenis();
    }, []);

    return (
        <>
            <Intro
                introCompleted={introCompleted}
                setIntroCompleted={setIntroCompleted}
            />
            {introCompleted && (
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
            )}
        </>
    );
};

export default App;
