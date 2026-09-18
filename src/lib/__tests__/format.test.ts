import { describe, it, expect } from 'vitest';
import { formatNGN, formatDate } from '../format';

describe('formatNGN', () => {
  it('formats a valid number as Naira', () => {
    const result = formatNGN(185000);
    expect(result).toContain('185,000');
    expect(result).toMatch(/₦|NGN|NG/);
  });

  it('handles zero', () => {
    const result = formatNGN(0);
    expect(result).toContain('0');
  });

  it('handles undefined', () => {
    const result = formatNGN(undefined);
    expect(result).toBe('Price unavailable');
  });

  it('handles null', () => {
    const result = formatNGN(null);
    expect(result).toBe('Price unavailable');
  });

  it('handles NaN', () => {
    const result = formatNGN(NaN);
    expect(result).toBe('Price unavailable');
  });

  it('handles negative numbers', () => {
    const result = formatNGN(-100);
    expect(result).not.toBe('Price unavailable');
  });

  it('handles large numbers', () => {
    const result = formatNGN(1500000);
    expect(result).toContain('1,500,000');
  });
});

describe('formatDate', () => {
  it('formats a valid date string', () => {
    const result = formatDate('2026-06-15');
    expect(result).toBeTruthy();
    expect(result).toContain('2026');
  });

  it('handles empty string', () => {
    const result = formatDate('');
    expect(result).toBe('');
  });

  it('handles undefined', () => {
    const result = formatDate(undefined);
    expect(result).toBe('');
  });

  it('handles invalid date', () => {
    const result = formatDate('not-a-date');
    expect(result).toBe('');
  });
});
