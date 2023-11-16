import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface IBoardState {
  [key: string]: ITodo[];
}

export const toDoState = atom<IBoardState>({
  key: "toDo",
  default: {
    "To Do": [],
    Doing: [],
    Done: [],
  },
});
