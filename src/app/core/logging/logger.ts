import { environment } from '@env/environment';
import { LogLevel } from './log-level.enum';

type LogPayload = unknown;

export class Logger {
  // ==============================
  // Config (Environment)
  // ==============================
  private static readonly level: LogLevel =
    environment.logging?.level ?? LogLevel.Info;

  private static readonly enableTimestamp =
    environment.logging?.enableTimestamp ?? true;

  // ==============================
  // Constants
  // ==============================
  private static readonly LEVEL_PRIORITY: Record<LogLevel, number> = {
    [LogLevel.Trace]: 0,
    [LogLevel.Debug]: 1,
    [LogLevel.Info]: 2,
    [LogLevel.Warn]: 3,
    [LogLevel.Error]: 4,
    [LogLevel.Silent]: 6
  };

  // ==============================
  // Public API — Core Logs
  // ==============================

  static trace(message: string): void {
    if (!this.shouldLog(LogLevel.Trace)) return;
    console.trace(this.prefix(LogLevel.Trace), message);
  }

  static debug(message: string, data?: LogPayload): void {
    this.write(LogLevel.Debug, 'debug', message, data);
  }

  static log(message: string | any, data?: LogPayload): void {
    this.write(LogLevel.Debug, 'log', message, data);
  }

  static info(message: string, data?: LogPayload): void {
    this.write(LogLevel.Info, 'info', message, data);
  }

  static warn(message: string, data?: LogPayload): void {
    this.write(LogLevel.Warn, 'warn', message, data);
  }

  static error(message: string, data?: LogPayload): void {
    this.write(LogLevel.Error, 'error', message, data);
  }


  // ==============================
  // Public API — Groups
  // ==============================

  static group(title: string): void {
    if (!this.enabled()) return;
    console.group(this.prefix(LogLevel.Debug), title);
  }

  static groupCollapsed(title: string): void {
    if (!this.enabled()) return;
    console.groupCollapsed(this.prefix(LogLevel.Debug), title);
  }

  static groupEnd(): void {
    if (!this.enabled()) return;
    console.groupEnd();
  }

  // ==============================
  // Public API — Performance
  // ==============================

  static time(label: string): void {
    if (!this.enabled()) return;
    console.time(label);
  }

  static timeLog(label: string, message?: string): void {
    if (!this.enabled()) return;
    console.timeLog(label, message);
  }

  static timeEnd(label: string): void {
    if (!this.enabled()) return;
    console.timeEnd(label);
  }

  // ==============================
  // Public API — Data Inspection
  // ==============================

  static table(data: LogPayload): void {
    if (!this.enabled()) return;
    console.table(data as any);
  }

  static dir(data: LogPayload): void {
    if (!this.enabled()) return;
    console.dir(data as any);
  }

  static dirxml(data: LogPayload): void {
    if (!this.enabled()) return;
    console.dirxml(data as any);
  }

  // ==============================
  // Public API — Assert & Counters
  // ==============================

  static assert(condition: boolean, message: string): void {
    if (!this.enabled()) return;
    console.assert(condition, this.prefix(LogLevel.Warn), message);
  }

  static count(label: string): void {
    if (!this.enabled()) return;
    console.count(label);
  }

  static countReset(label: string): void {
    if (!this.enabled()) return;
    console.countReset(label);
  }

  // ==============================
  // Public API — Utils
  // ==============================

  static clear(): void {
    if (!this.enabled()) return;
    console.clear();
  }

  static profile(label: string): void {
    if (!this.enabled()) return;
    console.profile?.(label);
  }

  static timeStamp(label: string): void {
    if (!this.enabled()) return;
    console.timeStamp?.(label);
  }

  // ==============================
  // Private — Core Engine
  // ==============================

  private static write(
    level: LogLevel,
    method: 'log' | 'info' | 'debug' | 'warn' | 'error',
    message: string,
    payload?: LogPayload
  ): void {
    if (!this.shouldLog(level)) return;

    const args = payload
      ? [this.prefix(level), message, payload]
      : [this.prefix(level), message];

    console[method](...args);
  }

  private static shouldLog(level: LogLevel): boolean {
    if (this.level === LogLevel.Silent) return false;

    return (
      this.LEVEL_PRIORITY[level] >=
      this.LEVEL_PRIORITY[this.level]
    );
  }

  private static enabled(): boolean {
    return this.level !== LogLevel.Silent;
  }

  // ==============================
  // Private — Formatting
  // ==============================

  private static prefix(level: LogLevel): string {
    const parts: string[] = [];

    if (this.enableTimestamp) {
      parts.push(new Date().toISOString());
    }

    parts.push(level.toUpperCase());

    return `[${parts.join(' | ')}]`;
  }
}
