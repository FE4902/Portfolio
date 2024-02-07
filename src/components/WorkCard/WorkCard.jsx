import classNames from "classnames/bind";

import * as styles from "./WorkCard.module.scss";

const c = classNames.bind(styles);

const WorkCard = ({ thumb, title, category, href }) => {
    return (
        <a
            className={c("work__link")}
            href={`https://www.notion.so/fe4902/${href}`}
            target="_blank"
            rel="noreferrer"
        >
            <figure className={c("work__image")}>
                <img
                    src={`/image/work/${thumb}.png`}
                    alt=""
                />
            </figure>
            <h4 className={c("work__title")}>{title}</h4>
            <div className={c("work__category")}>
                {category}
            </div>
        </a>
    );
}

export default WorkCard;