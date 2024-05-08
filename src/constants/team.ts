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

interface TeamData {
  name: string;
  place: string;
  color: string;
}

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
