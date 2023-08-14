import { useReducer } from "react"
import { Question } from "../hooks/useQuestions";
import { ScoreBoard } from "./ScoreBoard";
import { CurrentQuestion } from "./Question";
import { Answer } from "./Answer";
import { FinishScreen } from "./FinishScreen";

export enum QuizActions {
  Next = "Next",
  Correct = "Correct",
  Wrong = "Wrong",
  Idle = "Idle",
}

export type QuizAction = { type: QuizActions.Idle } | {
  type: QuizActions.Correct,
  payload: { answer: string, point: number }
} | {
  type: QuizActions.Wrong,
  payload: { answer: string, point: number }
} | {
  type: QuizActions.Next
};

interface QuizState {
  currentQuestion: number,
  correctAnswers: number,
  wrongAnswers: number,
  point: number,
  answer: string | null,
}
const initialState = {
  currentQuestion: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  point: 0,
  answer: null,
}
const reducer = (state: QuizState, action: QuizAction) => {
  switch (action.type) {
    case QuizActions.Correct: return {
      ...state,
      correctAnswers: state.correctAnswers + 1,
      point: state.point + action.payload.point,
      answer: action.payload.answer
    }
    case QuizActions.Wrong: return {
      ...state,
      wrongAnswers: state.wrongAnswers + 1,
      point: state.point - action.payload.point,
      answer: action.payload.answer
    }
    case QuizActions.Next: return {
      ...state,
      currentQuestion: state.currentQuestion + 1,
      answer: null,
    }
    default:
      return state;
  }
}

export const Quiz = ({ questions, maxPossiblePoints }: { questions: Question[], maxPossiblePoints: number }) => {
  const [quiz, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {quiz.currentQuestion >= questions.length ?(
        <FinishScreen points={quiz.point} maxPoints={maxPossiblePoints}/>
      ):(
        <div className="space-y-5 p-2">
        <ScoreBoard currentQuestion={quiz.currentQuestion} maxQuestions={questions.length}
          points={quiz.point} maxPossiblePoints={maxPossiblePoints} />
        <CurrentQuestion question={`${questions[quiz.currentQuestion].question}`} />
        <Answer answer={quiz.answer} question={questions[quiz.currentQuestion]} dispatch={dispatch} />
        <div className="flex justify-end w-1/2 m-auto p-2">
          <button onClick={() => dispatch({ type: QuizActions.Next })}
            disabled={!quiz.answer} className="px-5 py-2 bg-blue-500 rounded-full disabled:bg-zinc-600">Next</button>
        </div>
      </div>
      )}
    </>
  )
}
