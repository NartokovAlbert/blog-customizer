import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ArrowButton, OnClick } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
  component: ArrowButton,
};

export default meta;

export const ArrowButtonStory: StoryObj<typeof ArrowButton> = {
  render: () => {
    const handleClick: OnClick = () => console.log('click');
    return (
      <>
        <ArrowButton isOpen={false} onClick={handleClick} />
      </>
    );
  },
};