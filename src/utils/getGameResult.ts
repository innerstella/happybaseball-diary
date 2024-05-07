export default function getGameResult(
  myScore: number,
  vsScore: number
): "win" | "lose" | "draw" {
  if (myScore > vsScore) {
    return "win";
  } else if (myScore < vsScore) {
    return "lose";
  } else {
    return "draw";
  }
}
