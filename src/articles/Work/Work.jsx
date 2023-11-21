import classNames from "classnames/bind";

import * as styles from "./Work.module.scss";

const c = classNames.bind(styles);

const Work = () => {
    return (
        <article className={c("work")}>
            <div className={c("container")}>
                <div className={c("title")}>WORKS</div>
                <ul className={c("work__list")}>
                    {WorkArray.map((v, i) => (
                        <li className={c("work__item")} key={i}>
                            <a
                                className={c("work__link")}
                                href={v.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <figure className={c("work__image")}>
                                    <img
                                        src={`/image/work/${v.thumb}.png`}
                                        alt=""
                                    />
                                </figure>
                                <h4 className={c("work__title")}>{v.title}</h4>
                                <div className={c("work__category")}>
                                    {v.category}
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
    {
        thumb: "Punkland",
        title: "펑크랜드 랜딩페이지",
        category: "슈퍼캣",
        href: "https://www.notion.so/fe4902/4a029907e4ce4bb7a8738229f6d3fc85?pvs=4",
    },
    {
        thumb: "Punkland",
        title: "펑크랜드",
        category: "슈퍼캣",
        href: "https://www.notion.so/fe4902/4a029907e4ce4bb7a8738229f6d3fc85?pvs=4",
    },
    {
        thumb: "Community",
        title: "커뮤니티",
        category: "게임덱스",
        href: "https://www.notion.so/fe4902/12e0770d3e404cee8a251845b00de1aa?pvs=4",
    },
    {
        thumb: "Company",
        title: "기업 공식홈페이지",
        category: "게임덱스",
        href: "https://www.notion.so/fe4902/155339625bd9463f9772f9b7f57929aa?pvs=4",
    },
    {
        thumb: "Game",
        title: "게임 공식홈페이지",
        category: "게임덱스",
        href: "https://www.notion.so/fe4902/a1cea3f35ff540bc9e76f1d515dbe1d9?pvs=4",
    },
    {
        thumb: "Event",
        title: "이벤트 페이지",
        category: "게임덱스",
        href: "https://www.notion.so/fe4902/a46b2848143b44bda68a3e97c9b4bc76?pvs=4",
    },
    {
        thumb: "GameDex",
        title: "인트라넷",
        category: "게임덱스",
        href: "https://www.notion.so/fe4902/996e72a68fe24752a402b493991bad0f?pvs=4",
    },
];
