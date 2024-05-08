export default function parseBaseTime(baseTime: string) {
  const baseTimeArray = baseTime.split("");
  const year = baseTimeArray.slice(0, 4).join("");
  const month = baseTimeArray.slice(4, 6).join("");
  const day = baseTimeArray.slice(6, 8).join("");
  const hour = baseTimeArray.slice(8, 10).join("");
  const minute = baseTimeArray.slice(10, 12).join("");
  return `${year}/${month}/${day} ${hour}:${minute}`;
}
