export const TEAM_COLOR: { [key: string]: string } = {
  LG: "#a50034",
  KT: "#000000",
  SSG: "#ce0e2d",
  NC: "#071d3d",
  두산: "#131230",
  KIA: "#D72E34",
  롯데: "#0B1D40",
  삼성: "#204B9B",
  한화: "#ED702D",
  키움: "#4F0F16",
};

export const TEAM_LIST = [
  "LG",
  "KT",
  "SSG",
  "NC",
  "두산",
  "KIA",
  "롯데",
  "삼성",
  "한화",
  "키움",
];

export const PLACE_LIST = [
  "고척",
  "라팍",
  "랜필",
  "사직",
  "이팍",
  "엔팍",
  "위팍",
  "잠실",
  "챔필",
];

export const PLACE_COLOR: { [key: string]: string } = {
  잠실: "linear-gradient(270deg, #A50034 0%, #131230 100%);",
  위팍: "#000000",
  랜필: "#ce0e2d",
  엔팍: "#071d3d",
  챔필: "#D72E34",
  사직: "#0B1D40",
  라팍: "#204B9B",
  이팍: "#ED702D",
  고척: "#4F0F16",
};
interface PlaceData {
  color: string;
  nx: number;
  ny: number;
}

export const PLACE_DATA: { [key: string]: PlaceData } = {
  잠실: {
    color: "linear-gradient(270deg, #A50034 0%, #131230 100%);",
    nx: 61, // 37.5122579
    ny: 126, // 127.0719011
  },
  위팍: {
    color: "#000000",
    nx: 60, // 37.2997553
    ny: 121, // 127.0096685
  },
  랜필: {
    color: "#ce0e2d",
    nx: 55, // 37.4370423
    ny: 124, // 126.6932617
  },
  엔팍: {
    color: "#071d3d",
    nx: 89, // 35.2225335
    ny: 76, // 128.5823895
  },
  챔필: {
    color: "#D72E34",
    nx: 59, // 35.1682592
    ny: 75, // 126.8884114
  },
  사직: {
    color: "#0B1D40",
    nx: 98, // 35.1940316
    ny: 76, // 129.0615183
  },
  라팍: {
    color: "#204B9B",
    nx: 90, // 35.8410136
    ny: 90, // 128.6819955
  },
  이팍: {
    color: "#ED702D",
    nx: 68, // 36.3172026
    ny: 100, // 127.4285703
  },
  고척: {
    color: "#4F0F16",
    nx: 58, // 37.498182
    ny: 125, // 126.8670082
  },
};

interface TeamData {
  name: string;
  place: string;
  color: string;
}

//TODO: 좌표 추가
export const TEAM_DATA: { [key: string]: TeamData } = {
  LG: {
    name: "LG 트윈스",
    place: "잠실",
    color: "#a50034",
  },
  KT: {
    name: "KT 위즈",
    place: "위팍",
    color: "#000000",
  },
  SSG: {
    name: "SSG 랜더스",
    place: "랜필",
    color: "#ce0e2d",
  },
  NC: {
    name: "NC 다이노스",
    place: "엔팍",
    color: "#071d3d",
  },
  두산: {
    name: "두산 베어스",
    place: "잠실",
    color: "#131230",
  },
  KIA: {
    name: "KIA 타이거즈",
    place: "챔필",
    color: "#D72E34",
  },
  롯데: {
    name: "롯데 자이언츠",
    place: "사직",
    color: "#0B1D40",
  },
  삼성: {
    name: "삼성 라이온즈",
    place: "라팍",
    color: "#204B9B",
  },
  한화: {
    name: "한화 이글스",
    place: "이팍",
    color: "#ED702D",
  },
  키움: {
    name: "키움 히어로즈",
    place: "고척",
    color: "#4F0F16",
  },
};
