import React, { SyntheticEvent } from 'react';
import clsx from 'clsx';
import styles from './ArrowButton.module.scss';
import arrow from 'src/images/arrow.svg';

export type OnClick = () => void;

export type ArrowButtonProps = {
  onClick: OnClick; 
  isOpen: boolean;
};

export const ArrowButton = ({ onClick, isOpen }: ArrowButtonProps) => {
  return (
    <div
      role='button'
      aria-label='Открыть/Закрыть форму параметров статьи'
      tabIndex={0}
      className={clsx(styles.container, isOpen && styles.container_open)}
      onClick={(e: SyntheticEvent) => {
        e.stopPropagation();
        onClick(); 
      }}
    >
      <img
        src={arrow}
        alt='иконка стрелочки'
        className={clsx(styles.arrow, isOpen && styles.arrow_open)}
      />
    </div>
  );
};