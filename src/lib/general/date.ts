export function getCurrDate(): Date {
  return new Date();
}

export function getCurrYear(): number {
  return getCurrDate().getFullYear();
}

export function getCurrMonth(): number {
  return getCurrDate().getMonth();
}

export function getMonthName(month: number): string {
  return new Date(0, month).toLocaleString("default", { month: "long" });
}

export function getMonthShortName(month: number): string {
  return new Date(0, month).toLocaleString("default", { month: "short" });
}

export function getCurrDay(): number {
  return getCurrDate().getDate();
}

export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}
