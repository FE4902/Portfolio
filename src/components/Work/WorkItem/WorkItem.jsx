import classNames from "classnames/bind";
import { motion } from "framer-motion";

import * as styles from "./WorkItem.module.scss";

const c = classNames.bind(styles);

const WorkItem = ({ thumb, title, category, href }) => {
    const fadeInUp = {
        inactive: {
            opacity: 0,
            y: 30,
        },
        active: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <motion.li
            className={c("workItem")}
            variants={fadeInUp}
            initial="inactive"
            whileInView="active"
        >
            <a
                className={c("link")}
                href={`https://www.notion.so/fe4902/${href}`}
                target="_blank"
                rel="noreferrer"
            >
                <figure className={c("image")}>
                    <img
                        src={`/image/work/${thumb}.png`}
                        alt="work thumbnail"
                        loading="lazy"
                    />
                </figure>
                <div className={c("title")}>{title}</div>
                <p className={c("category")}>{category}</p>
            </a>
        </motion.li>
    );
};

export default WorkItem;
