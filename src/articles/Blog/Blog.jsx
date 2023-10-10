import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import * as styles from "./Blog.module.scss";

const c = classNames.bind(styles);

const Blog = () => {
    const { VITE_API_KEY } = import.meta.env;
    const [posts, setPosts] = useState([]);

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
                <h2 className={c("title")}>BLOG</h2>
                <ul className={c("post__list")}>
                    {posts.slice(0, 8).map((post, i) => (
                        <li key={i} className={c("post__item")}>
                            <a className={c("post__link")} href={post.postUrl}>
                                <h4 className={c("post__title")}>
                                    {post.title}
                                </h4>
                                <p className={c("post__date")}>{post.date}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default Blog;
