import classNames from "classnames/bind";

import * as styles from "./Work.module.scss";

const c = classNames.bind(styles);

const Work = () => {
    return (
        <article id="work" className={c("work")}>
            <div className={c("container")}>
                <h2 className={c("title")}>WORK</h2>
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
