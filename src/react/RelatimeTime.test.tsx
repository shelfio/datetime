import React from 'react';
import {render, screen} from '@testing-library/react';
import format from '../format.js';
import formatDistanceToNow from '../formatDistanceToNow.js';
import {DATE_FORMATS} from '../utils/formats.js';
import RelatimeTime from './RelatimeTime.js';

describe('relatimeTime', () => {
  const now = new Date('2025-01-01T00:00:00Z');
  const date = new Date('2024-12-31T23:00:00Z');

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(now);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('renders relative time without suffix by default', () => {
    const content = formatDistanceToNow(date);
    const title = format(date, DATE_FORMATS.LOCALIZED_DATETIME_LONG);

    render(<RelatimeTime date={date} />);

    const element = screen.getByText(content);

    expect(element.tagName).toBe('SPAN');
    expect(element).toHaveAttribute('title', title);
  });

  it('supports addSuffix and asChild rendering', () => {
    const content = formatDistanceToNow(date, {addSuffix: true});

    render(
      <RelatimeTime date={date} addSuffix asChild className="outer">
        <time className="inner" />
      </RelatimeTime>
    );

    const element = screen.getByText(content);

    expect(element.tagName).toBe('TIME');
    expect(element).toHaveClass('inner');
    expect(element).toHaveClass('outer');
  });
});
