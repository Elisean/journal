'use client'
import React, { FC } from 'react';
import styles from './side-bar.module.scss'

interface SideBarProps {
  data: Array<{
    date: string;
    allPayHour: number;
  }>;
}

export const SideBar: FC<SideBarProps> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div className={styles.table} key={index}>
          <h2 className={styles.date}>{item.date}</h2>
          <p className={styles.separeted}>-</p>
          <h2 className={styles.all_pay_hour}>{item.allPayHour}р</h2>
        </div>
      ))}
    </>
  );
};