import ProgressBar from "./Progressbar"

export const ScoreBoard = ({ points, currentQuestion, maxPossiblePoints, maxQuestions }: {
  points: number,
  currentQuestion: number
  maxPossiblePoints: number,
  maxQuestions: number
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-1/2 
    m-auto border border-zinc-600 rounded-lg p-5">
      <ProgressBar value={points} max={maxPossiblePoints} />
      <div className="flex w-full justify-between items-center">
        <div>Question: {currentQuestion + 1} / {maxQuestions}</div>
        <div>Points: {points} / {maxPossiblePoints}</div>
      </div>
    </div>
  )
}
