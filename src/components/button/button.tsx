'use client'
import React, { FC, ReactNode } from 'react';
import styles from "./button.module.scss";

interface props{
    children:ReactNode;
    // onclick: () => void;
    type: "button" | "submit" | "reset" | undefined;
}

export const Button:FC<props> = ({children, type}) => {
  return (
    <button className={styles.button} type={type}>{children}</button>
  )
}


