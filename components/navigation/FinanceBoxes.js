"use client"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCamera,
  faGift,
  faBook,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./FinanceBoxes.module.css";

const FinanceBoxes = () => {
  const [selected, setSelected] = useState("Wedding Hall"); // Default selected

  const boxes = [
    {
      title: "Wedding Hall",
      icon: faBuilding,
      className: "wedding-hall",
      href: "/wedding-hall",
    },
    {
      title: "Food Choices",
      icon: faUtensils,
      className: "food-choices",
      href: "/food-choices",
    },
    {
      title: "Cameramen",
      icon: faCamera,
      className: "cameramen",
      href: "/cameramen",
    },
    { title: "Gifts", icon: faGift, className: "gifts", href: "/gifts" },
    { title: "Albums", icon: faBook, className: "album", href: "/albums" },
  ];

  return (
    <div className={styles["finance-box-container"]}>
      {boxes.map((box, index) => (
        <Link
          href={box.href}
          key={index}
          className={`${styles["finance-box"]} ${styles[box.className]} ${
            selected === box.title ? styles.selected : ""
          }`}
          onClick={() => setSelected(box.title)}
        >
          <div>
            <FontAwesomeIcon
              icon={box.icon}
              className={styles.icon}
              size="2x"
            />
            <h3>{box.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FinanceBoxes;
