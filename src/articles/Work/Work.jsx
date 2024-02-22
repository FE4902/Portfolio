import classNames from "classnames/bind";

import WorkItem from "@components/Work/WorkItem/WorkItem";
import workList from "@db/db";

import * as styles from "./Work.module.scss";

const c = classNames.bind(styles);

const Work = () => {
    return (
        <article className={c("work")}>
            <div className={c("container")}>
                <h2 className={c("title")}>WORKS</h2>
                <div className={c("marquee")}>
                    <div className={c("marquee__track")}>
                        {[...Array(8)].map((_, index) => {
                            return (
                                <span
                                    className={c("marquee__item")}
                                    key={index}
                                >
                                    WORKS&nbsp;
                                </span>
                            );
                        })}
                    </div>
                </div>
                <ul className={c("list")}>
                    {workList.map((workItem, index) => (
                        <WorkItem key={index} {...workItem} />
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default Work;
