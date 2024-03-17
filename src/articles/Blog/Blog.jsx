import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { motion } from "framer-motion";

import PostItem from "@components/Blog/PostItem/PostItem";
import Bracket from "@components/Bracket/Bracket";
import Button from "@components/Button/Button";

import * as styles from "./Blog.module.scss";

const c = classNames.bind(styles);

const Blog = () => {
    const { VITE_BLOG_DATA } = import.meta.env;
    const [posts, setPosts] = useState([]);

    const container = {
        inactive: {
            opacity: 0,
        },
        active: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                when: "beforeChildren",
            },
        },
    };

    async function fetchPost() {
        const response = await fetch(VITE_BLOG_DATA);
        const data = await response.json();

        setPosts(data.items);
    }

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <article className={c("blog")}>
            <div className={c("container")}>
                <motion.div className={c("inner")}>
                    <Bracket>BLOG</Bracket>
                    <div className={c("desc")}>
                        블로그를 통해 기록하고,
                        <br /> 인사이트를 공유하고 있습니다.
                    </div>
                    <div className={c("button")}>
                        <Button href="https://fe4902.tistory.com/">
                            블로그 바로가기
                        </Button>
                    </div>
                </motion.div>
                <div className={c("post")}>
                    <motion.ul
                        className={c("post__list")}
                        variants={container}
                        initial="inactive"
                        whileInView="active"
                    >
                        {posts.slice(0, 8).map((post, index) => (
                            <PostItem key={index} {...post} />
                        ))}
                    </motion.ul>
                </div>
            </div>
        </article>
    );
};

export default Blog;
