import React from 'react';
import type {ConfigType} from 'dayjs';
import formatDistanceToNow from '../formatDistanceToNow.js';
import {DATE_FORMATS} from '../utils/formats.js';
import format from '../format.js';
import TimeElement from './TimeElement.js';

export type RelatimeTimeProps = Omit<React.HTMLAttributes<HTMLElement>, 'children' | 'title'> & {
  date: ConfigType;
  addSuffix?: boolean;
  asChild?: boolean;
  children?: React.ReactElement;
};

const RelatimeTime = ({date, addSuffix, asChild, children, ...rest}: RelatimeTimeProps) => {
  const content = formatDistanceToNow(date, {addSuffix});
  const title = format(date, DATE_FORMATS.LOCALIZED_DATETIME_LONG);

  return (
    <TimeElement {...rest} asChild={asChild} content={content} title={title}>
      {children}
    </TimeElement>
  );
};

export default RelatimeTime;
