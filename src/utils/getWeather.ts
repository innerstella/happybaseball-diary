import axios from "axios";

const base_url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0";
const key =
  "ifbunpUUT7Uop%2BPP1Jap6CqsRHxdcUJJfuJgoktnjXBuoSAZNvXKAU7sR5W41vuHyKEMohbTJzgf6aHh0sMlVg%3D%3D";
const base_date = "20240508";
let base_time = "1430";
const now = new Date();

if (now.getMinutes() < 30) {
  base_time = `${now.getHours() - 1}30`;
} else {
  base_time = `${now.getHours()}30`;
}

console.log(base_time);

const SKY_ICON: { [key: number]: string } = {
  1: "sun",
  3: "cloundAndSun",
  4: "cloudy",
};

export default async function getCurrWeather() {
  // T1H : 기온, RN1 : 1시간 강수량, SKY : 하늘상태, UUU : 동풍, VVV : 북풍, REH : 습도
  // 하늘상태(SKY) 코드 : 맑음(1), 구름많음(3), 흐림(4)

  const weatherData = await axios
    .get(
      `${base_url}/getUltraSrtFcst?serviceKey=${key}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${base_date}&base_time=${base_time}&nx=55&ny=127`
    )
    .then((res) => {
      return res.data.response.body.items;
    });

  return {
    base_time: base_time,
    T1H: weatherData.item.filter((item: any) => item.category === "T1H")[0]
      .fcstValue,
    RN1: weatherData.item.filter((item: any) => item.category === "RN1")[0]
      .fcstValue,
    SKY: SKY_ICON[
      weatherData.item.filter((item: any) => item.category === "SKY")[0]
        .fcstValue
    ],
  };
}
