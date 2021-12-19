import React from "react";
import { Link } from "react-router-dom";
import styles from "./IconLink.module.css";

const IconLink = ({to="/#", src, title}) => {
    return (
        <Link to={to} className={styles.main} >
            <img className={styles.icon} src={src} alt={title} />
            {title}
        </Link>
    )
}

export default IconLink;