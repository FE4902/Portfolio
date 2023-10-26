import classNames from "classnames/bind";

import * as styles from "./Work.module.scss";
// import Bracket from "../../components/Bracket/Bracket";

const c = classNames.bind(styles);

const Work = () => {
    return (
        <article className={c("work")}>
            <div className={c("container")}>
                {/* <div className={c("title")}>
                    <Bracket>WORK</Bracket>
                    <p className={c("sub-title")}>
                        현재까지 했던 일
                    </p>
                </div> */}
                <ul className={c("work__list")}>
                    {WorkArray.map((v, i) => (
                        <li className={c("work__item")} key={i}>
                            <a className={c("work__link")} href="/">
                                <figure className={c("work__image")}></figure>
                                <h4 className={c("work__title")}>{v.title}</h4>
                                <div className={c("work__category")}>
                                    {v.category.map((y, j) => (
                                        <span key={j}>{v.category}</span>
                                    ))}
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default Work;

const WorkArray = [
    { title: "프리스타일123", category: ["asd", "asd"] },
    { title: "프리스타일123", category: ["asd", "asd"] },
    { title: "프리스타일123", category: ["asd", "asd"] },
    { title: "프리스타일123", category: ["asd", "asd"] },
    { title: "프리스타일123", category: ["asd", "asd"] },
    { title: "프리스타일123", category: ["asd", "asd"] },
    { title: "프리스타일123", category: ["asd", "asd"] },
];
