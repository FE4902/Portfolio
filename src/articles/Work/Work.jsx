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
                                href={`https://www.notion.so/fe4902/${v.href}`}
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
        href: "4a029907e4ce4bb7a8738229f6d3fc85?pvs=4",
    },
    {
        thumb: "Punkland",
        title: "펑크랜드",
        category: "슈퍼캣",
        href: "48d248a320394726b91a7416e8dad899",
    },
    {
        thumb: "Community",
        title: "커뮤니티",
        category: "게임덱스",
        href: "8b60e3d82306491ab89abcc7bb57a08a",
    },
    {
        thumb: "Company",
        title: "기업 공식홈페이지",
        category: "게임덱스",
        href: "4ccede1d41e4405d8d66492a6e4fe3c9",
    },
    {
        thumb: "Game",
        title: "게임 공식홈페이지",
        category: "게임덱스",
        href: "bc19c4c888544b4dba03f26e9fa08bd2",
    },
    {
        thumb: "Event",
        title: "이벤트 페이지",
        category: "게임덱스",
        href: "adcbbf17fd844ed783f9c6036e4dcfb1",
    },
    {
        thumb: "GameDex",
        title: "인트라넷",
        category: "게임덱스",
        href: "627dae3bf1044e0cae589527684886b3",
    },
];
