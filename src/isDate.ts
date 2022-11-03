export default (value: unknown): boolean =>
  value instanceof Date ||
  (typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]');
