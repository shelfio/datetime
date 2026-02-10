import React from 'react';
import type {ConfigType} from 'dayjs';
import formatDate from '../format.js';
import {DATE_FORMATS} from '../utils/formats.js';
import TimeElement from './TimeElement.js';

export type FormatTimeProps = Omit<React.HTMLAttributes<HTMLElement>, 'children' | 'title'> & {
  date: ConfigType;
  format?: string;
  asChild?: boolean;
  children?: React.ReactElement;
};

const FormatTime = ({
  date,
  format = DATE_FORMATS.LOCALIZED_DATETIME_LONG,
  asChild,
  children,
  ...rest
}: FormatTimeProps) => {
  const content = formatDate(date, format);
  const title = formatDate(date, DATE_FORMATS.LOCALIZED_DATETIME_LONG);

  return (
    <TimeElement {...rest} asChild={asChild} content={content} title={title}>
      {children}
    </TimeElement>
  );
};

export default FormatTime;
