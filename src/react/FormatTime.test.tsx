import React from 'react';
import {render, screen} from '@testing-library/react';
import format from '../format.js';
import {DATE_FORMATS} from '../utils/formats.js';
import FormatTime from './FormatTime.js';

describe('formatTime', () => {
  const date = new Date('2025-01-02T03:04:05Z');

  it('renders a span with LLL title by default', () => {
    const expected = format(date, DATE_FORMATS.LOCALIZED_DATETIME_LONG);

    render(<FormatTime date={date} className="text-sm" data-testid="time" />);

    const element = screen.getByText(expected);

    expect(element.tagName).toBe('SPAN');
    expect(element).toHaveAttribute('title', expected);
    expect(element).toHaveClass('text-sm');
    expect(element).toHaveAttribute('data-testid', 'time');
  });

  it('supports custom formats and asChild rendering', () => {
    const content = format(date, DATE_FORMATS.US_DATE);
    const title = format(date, DATE_FORMATS.LOCALIZED_DATETIME_LONG);

    render(
      <FormatTime date={date} format={DATE_FORMATS.US_DATE} asChild className="outer">
        <time className="inner" data-foo="bar" />
      </FormatTime>
    );

    const element = screen.getByText(content);

    expect(element.tagName).toBe('TIME');
    expect(element).toHaveAttribute('title', title);
    expect(element).toHaveClass('inner');
    expect(element).toHaveClass('outer');
    expect(element).toHaveAttribute('data-foo', 'bar');
  });
});
