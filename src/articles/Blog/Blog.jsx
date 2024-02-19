import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { motion } from "framer-motion";

import Bracket from "@components/Bracket/Bracket";

import * as styles from "./Blog.module.scss";

const c = classNames.bind(styles);

const Blog = () => {
    const { VITE_API_KEY } = import.meta.env;
    const [posts, setPosts] = useState([]);

    const item = {
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

    async function fetchPost() {
        const response = await fetch(VITE_API_KEY);
        const data = await response.json();

        setPosts(data.tistory.item.posts);
    }

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <article id="blog" className={c("blog")}>
            <div className={c("container")}>
                <Bracket>BLOG</Bracket>
                <ul className={c("post__list")}>
                    {posts.slice(0, 6).map((post, i) => (
                        <motion.li
                            key={i}
                            className={c("post__item")}
                            variants={item}
                            initial="inactive"
                            whileInView="active"
                        >
                            <a className={c("post__link")} href={post.postUrl}>
                                <h4 className={c("post__title")}>
                                    {post.title}
                                </h4>
                                <p className={c("post__date")}>{post.date}</p>
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default Blog;
