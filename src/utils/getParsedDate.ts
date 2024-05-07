export default function getParsedDate(date: string): string {
  return `${date.slice(0, 2)}.${date.slice(2, 4)}.${date.slice(4, 6)}`;
}
