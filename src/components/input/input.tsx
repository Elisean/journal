'use client'

import React, { forwardRef } from 'react'
import styles from './input.module.scss'

export const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <input className={styles.input} ref={ref} {...props} />;
});

