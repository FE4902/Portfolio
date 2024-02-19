import classNames from "classnames/bind";

import Magnetic from "@components/Magnetic/Magnetic";

import * as styles from "./Button.module.scss";

const c = classNames.bind(styles);

const Button = ({href, children}) => {
  return (
    <Magnetic>
      <a className={c("button")} href={href} target="_blank" rel="noreferrer">{children}</a>
    </Magnetic>
  )
}

export default Button;