import axios from "axios";

const base_url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0";
const now = new Date();
const base_date = `${now.getFullYear()}${(now.getMonth() + 1)
  .toString()
  .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}`;
const base_time =
  now.getMinutes() < 30 ? `${now.getHours() - 1}30` : `${now.getHours()}00`;

const SKY_ICON: { [key: number]: string } = {
  1: "sun",
  3: "sunAndCloud",
  4: "cloudy",
};

const nx = 35; // 정수로 써야 함
const ny = 126;
export async function getCurrWeather() {
  // T1H : 기온, RN1 : 1시간 강수량, SKY : 하늘상태
  // 하늘상태(SKY) 코드 : 맑음(1), 구름많음(3), 흐림(4)

  const weatherData = await axios
    .get(
      `${base_url}/getUltraSrtFcst?serviceKey=${process.env.REACT_APP_WEATHER_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}`
    )
    .then((res) => {
      return res.data.response.body.items;
    });

  return {
    base_time:
      weatherData.item.filter((item: any) => item.category === "T1H")[0]
        .baseDate +
      weatherData.item.filter((item: any) => item.category === "T1H")[0]
        .baseTime,
    fsctTime: weatherData.item
      .filter((item: any) => item.category === "T1H")[0]
      .fcstTime.slice(0, 2),
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

export async function getWeatherForecast() {
  const weatherData = await axios
    .get(
      `${base_url}/getUltraSrtFcst?serviceKey=${process.env.REACT_APP_WEATHER_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${base_date}&base_time=${base_time}&nx=55&ny=127`
    )
    .then((res) => {
      return res.data.response.body.items;
    });

  return [
    {
      id: 1,
      fcstTime: weatherData.item
        .filter((item: any) => item.category === "T1H")[1]
        .fcstTime.slice(0, 2),
      T1H: weatherData.item.filter((item: any) => item.category === "T1H")[1]
        .fcstValue,
      RN1: weatherData.item.filter((item: any) => item.category === "RN1")[1]
        .fcstValue,
      SKY: SKY_ICON[
        weatherData.item.filter((item: any) => item.category === "SKY")[1]
          .fcstValue
      ],
    },
    {
      id: 2,
      fcstTime: weatherData.item
        .filter((item: any) => item.category === "T1H")[2]
        .fcstTime.slice(0, 2),
      T1H: weatherData.item.filter((item: any) => item.category === "T1H")[2]
        .fcstValue,
      RN1: weatherData.item.filter((item: any) => item.category === "RN1")[2]
        .fcstValue,
      SKY: SKY_ICON[
        weatherData.item.filter((item: any) => item.category === "SKY")[2]
          .fcstValue
      ],
    },
    {
      id: 3,
      fcstTime: weatherData.item
        .filter((item: any) => item.category === "T1H")[3]
        .fcstTime.slice(0, 2),
      T1H: weatherData.item.filter((item: any) => item.category === "T1H")[3]
        .fcstValue,
      RN1: weatherData.item.filter((item: any) => item.category === "RN1")[3]
        .fcstValue,
      SKY: SKY_ICON[
        weatherData.item.filter((item: any) => item.category === "SKY")[3]
          .fcstValue
      ],
    },
  ];
}
