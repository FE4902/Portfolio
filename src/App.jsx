import Header from "@layouts/Header/Header";
import Main from "@articles/Main/Main";
import About from "@articles/About/About";
import Work from "@articles/Work/Work";
import Blog from "@articles/Blog/Blog";
import Contact from "@articles/Contact/Contact";
// import Intro from "@components/Intro/Intro";

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Main />
                <About />
                <Work />
                <Blog />
                <Contact />
            </main>
            {/* <Intro /> */}
        </div>
    );
};

export default App;
