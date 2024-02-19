import classNames from "classnames/bind";

import WorkItem from "@components/Work/WorkItem/WorkItem";
import workList from "@db/db";

import * as styles from "./Work.module.scss";

const c = classNames.bind(styles);

const Work = () => {

    return (
        <article className={c("work")}>
            <div className={c("container")}>
                <div className={c("title")}>WORKS</div>
                <ul className={c("work__list")}>
                    {workList.map((workItem, index) => (
                        <WorkItem key={index} {...workItem}/>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default Work;