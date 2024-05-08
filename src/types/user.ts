import { Timestamp } from "firebase/firestore";

export interface NewUserType {
  nickname: string;
  team: string;
}

export interface CardDataType {
  count: number;
  date: string;
  location: string;
  memo?: string;
  my?: string;
  myScore: number;
  realDate: Timestamp;
  vs: string;
  vsScore: number;
}
