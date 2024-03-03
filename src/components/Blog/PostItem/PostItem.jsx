import classNames from "classnames/bind";
import { motion } from "framer-motion";

import * as styles from "./PostItem.module.scss";

const c = classNames.bind(styles);

const PostItem = ({ postUrl, title, date }) => {
    const fadeInUp = {
        inactive: {
            opacity: 0,
            y: 30,
        },
        active: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <motion.li className={c("postItem")} variants={fadeInUp}>
            <a className={c("link")} href={postUrl}>
                {/* <div className={c("inner")}>
                <div className={c("title")}>
                    {title}
                </div>
                <p className={c("date")}>
                    {date}
                </p>    
            </div> */}
                <div className={c("title")}>{title}</div>
                <p className={c("date")}>{date}</p>
                <svg
                    className={c("icon")}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 22 22"
                >
                    <path d="M10 5h2v1h1v1h1v1h1v1h1v2h-2v-1h-1V9h-1v9h-2V9H9v1H8v1H6V9h1V8h1V7h1V6h1" />
                </svg>
            </a>
        </motion.li>
    );
};

export default PostItem;
