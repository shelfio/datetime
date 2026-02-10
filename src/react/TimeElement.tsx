import React from 'react';
import {Slot} from '@radix-ui/react-slot';

export type TimeElementProps = Omit<React.HTMLAttributes<HTMLElement>, 'children' | 'title'> & {
  asChild?: boolean;
  children?: React.ReactElement;
  content: string;
  title: string;
};

const TimeElement = ({asChild, children, content, title, ...rest}: TimeElementProps) => {
  if (asChild && React.isValidElement(children)) {
    const child = React.cloneElement(children, undefined, content);

    return (
      <Slot {...rest} title={title}>
        {child}
      </Slot>
    );
  }

  return (
    <span {...rest} title={title}>
      {content}
    </span>
  );
};

export default TimeElement;
