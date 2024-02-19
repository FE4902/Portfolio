import classNames from "classnames/bind";
import { motion } from "framer-motion";

import * as styles from "./WorkItem.module.scss";

const c = classNames.bind(styles);

const WorkItem = ({ thumb, title, category, href }) => {
    const item = {
        inactive: {
            y: 30,
            opacity: 0,
        },
        active: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <motion.li className={c("work__item")} variants={item} initial="inactive" whileInView="active">
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
        </motion.li>
    );
}

export default WorkItem;