import { JSX } from "react";
import { PtagProps } from "./Ptag.props";
import styles from "./Ptag.module.css";

export const Ptag = ({ tag, children }: PtagProps): JSX.Element => {
    switch (tag) {
        case 'p-read':
        return <p className={styles['p-read']}>{children}</p>;
        case 'p-review':
            return <p className={styles['p-review']}>{children}</p>;
    }
    
    // return <></>
};
