const formatter = new Intl.DateTimeFormat("ja-JP", {
  year: "numeric",
  month: "2-digit",
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
