import classNames from "classnames/bind";

import * as styles from "./Background.module.scss";

const c = classNames.bind(styles);

const Background = () => {
    const getBlocks = () => {
        const { innerWidth, innerHeight } = window;
        const size = innerWidth * 0.05;
        const amount = Math.ceil(innerHeight / size);

        return [...Array(amount)].map((_, i) => {
            return <div className={c("block")} key={i}></div>;
        });
    };

    return (
        <div className={c("background")}>
            {[...Array(12)].map((_, i) => {
                return (
                    <div className={c("column")} key={i}>
                        {getBlocks()}
                    </div>
                );
            })}
        </div>
    );
};

export default Background;
