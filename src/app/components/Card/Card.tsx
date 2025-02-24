import { JSX } from "react";
import Image from "next/image";
// import { CardProps } from "./Card.props";
import styles from "./Card.module.css";
import { Htag, Ptag} from "../index";

export const Card = (/* { ...props }: CardProps */): JSX.Element => {
    return (
      <div className={styles["card"]} /* style={{width=18rem;}} */>
        <Image
          src="/cardmedia_mini.png"
          className={styles["card-img-top"]}
          width={300}
          height={192}
          alt="..."
        />
        <div>
          {/* <Tag tagType="date" /> */}
        </div>
        <div className={styles["card-body"]}>
          <Htag tag="h3">Card title</Htag>
          <Ptag tag="p-review">
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </Ptag>
          <a href="#" className={styles["btn btn-primary"]}>
            {/* {children} */}
          </a>
        </div>
      </div>
    );
};
