/**
 * Date format tokens for Day.js
 * Use these with dayjs().format()
 * Note: Day.js uses same tokens as Moment.js
 */
export const DATE_FORMATS = {
  // Date-only
  ISO_DATE: 'YYYY-MM-DD', // 2025-10-15
  US_DATE: 'MM/DD/YYYY', // 10/15/2025
  EU_DATE: 'DD/MM/YYYY', // 15/10/2025
  YEAR_MONTH: 'YYYY-MM', // 2025-10
  MONTH_DAY: 'MM-DD', // 10-15
  YEAR_ONLY: 'YYYY', // 2025
  MONTH_SHORT: 'MMM', // Oct
  MONTH_LONG: 'MMMM', // October
  DAY_MONTH_YEAR_SHORT: 'D MMM YYYY', // 15 Oct 2025
  SHORT_DATE: 'MMM D, YYYY', // Oct 15, 2025
  READABLE_DATE: 'ddd, MMM D, YYYY', // Wed, Oct 15, 2025
  READABLE_DATE_LONG: 'dddd, MMMM D, YYYY', // Wednesday, October 15, 2025
  MONTH_YEAR_LONG: 'MMMM YYYY', // October 2025
  MONTH_DAY_YEAR_LONG: 'MMMM D, YYYY', // October 15, 2025
  EU_DATE_DOTS: 'DD.MM.YYYY', // 15.10.2025

  // Time-only
  TIME_24H: 'HH:mm', // 14:05
  TIME_24H_SECONDS: 'HH:mm:ss', // 14:05:30
  TIME_24H_MILLIS: 'HH:mm:ss.SSS', // 14:05:30.123
  TIME_12H: 'hh:mm A', // 02:05 PM
  TIME_12H_SECONDS: 'hh:mm:ss A', // 02:05:30 PM
  TIME_12H_NO_PAD: 'h:mm A', // 2:05 PM
  TIME_12H_SECONDS_NO_PAD: 'h:mm:ss A', // 2:05:30 PM

  // Local datetime (no timezone)
  ISO_DATETIME_24H: 'YYYY-MM-DD HH:mm:ss', // 2025-10-15 14:05:30
  ISO_DATETIME_24H_MS: 'YYYY-MM-DD HH:mm:ss.SSS', // 2025-10-15 14:05:30.123
  ISO_DATETIME_12H: 'YYYY-MM-DD hh:mm:ss A', // 2025-10-15 02:05:30 PM
  US_DATETIME: 'MM/DD/YYYY hh:mm A', // 10/15/2025 02:05 PM
  EU_DATETIME: 'DD/MM/YYYY HH:mm', // 15/10/2025 14:05
  SHORT_DATETIME: 'MMM D, HH:mm', // Oct 15, 14:05

  // ISO 8601 / RFC 3339 with timezone
  ISO_INSTANT: 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]', // 2025-10-15T14:05:30.123Z (UTC)
  ISO_OFFSET: 'YYYY-MM-DD[T]HH:mm:ssZ', // 2025-10-15T14:05:30+00:00
  ISO_OFFSET_MS: 'YYYY-MM-DD[T]HH:mm:ss.SSSZ', // 2025-10-15T14:05:30.123+00:00
  RFC_2822: 'ddd, DD MMM YYYY HH:mm:ss ZZ', // Wed, 15 Oct 2025 14:05:30 +0000
  TIMEZONE_OFFSET: 'Z', // +02:00

  // Week and ordinal (requires plugins: isoWeek, dayOfYear)
  ISO_WEEK_DATE: 'GGGG-[W]WW-E', // 2025-W42-3 (ISO week-year, week, weekday)
  ORDINAL_DATE: 'YYYY-DDD', // 2025-288 (year + day-of-year)

  // File/ID safe (no special chars)
  COMPACT_DATE: 'YYYYMMDD', // 20251015
  COMPACT_DATETIME: 'YYYYMMDD_HHmmss', // 20251015_140530
  COMPACT_DATETIME_MS: 'YYYYMMDD_HHmmss_SSS', // 20251015_140530_123

  // Human-friendly
  READABLE_DATETIME: 'MMM D, YYYY HH:mm', // Oct 15, 2025 14:05
  READABLE_DATETIME_WITH_TZ: 'MMM D, YYYY HH:mm z', // Oct 15, 2025 14:05 UTC (requires timezone plugin)
  YEAR_MONTH_NAME_DAY: 'YYYY MMMM D', // 2025 October 15
  YEAR_MONTH_NAME_DAY_ORDINAL: 'YYYY MMMM Do', // 2025 October 15th

  // Locale-aware (requires localizedFormat plugin)
  LOCALIZED_DATE_SHORT: 'L', // Locale-specific short date
  LOCALIZED_DATE_MEDIUM: 'LL', // Locale-specific long date
  LOCALIZED_DATETIME_LONG: 'LLL', // Locale-specific date & time
  LOCALIZED_TIME_SHORT: 'LT', // Locale-specific short time
  LOCALIZED_TIME_LONG: 'LTS', // Locale-specific time with seconds
};

export type DateFormatKey = keyof typeof DATE_FORMATS;
