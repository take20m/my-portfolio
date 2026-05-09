const formatter = new Intl.DateTimeFormat("ja-JP", {
  year: "numeric",
  month: "2-digit",
});

const fullFormatter = new Intl.DateTimeFormat("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export function formatYearMonth(date: Date): string {
  const parts = formatter.formatToParts(date);
  const year = parts.find((p) => p.type === "year")?.value ?? "";
  const month = parts.find((p) => p.type === "month")?.value ?? "";
  return `${year}.${month}`;
}

export function formatPeriod(start: Date, end?: Date): string {
  const startStr = formatYearMonth(start);
  if (!end) return `${startStr} —`;
  const endStr = formatYearMonth(end);
  if (startStr === endStr) return startStr;
  return `${startStr} — ${endStr}`;
}

export function formatFullDate(date: Date): string {
  const parts = fullFormatter.formatToParts(date);
  const year = parts.find((p) => p.type === "year")?.value ?? "";
  const month = parts.find((p) => p.type === "month")?.value ?? "";
  const day = parts.find((p) => p.type === "day")?.value ?? "";
  return `${year}.${month}.${day}`;
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
