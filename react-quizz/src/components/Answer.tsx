import { Dispatch } from 'react'
import { Question } from '../hooks/useQuestions'
import { QuizAction, QuizActions } from './Quiz'

export const Answer = ({ question, dispatch,answer }: { question: Question, dispatch: Dispatch<QuizAction>,answer:string | null }) => {
    return (
        <ul className="text-center space-y-2">
            {question.options.map((option, index) => (
                <li key={index}><button disabled={answer !== null} onClick={() => {
                    if (index === question.correctOption) {
                        dispatch({ type: QuizActions.Correct, payload: {answer:option,point:question.points} })
                    } else {
                        dispatch({ type: QuizActions.Wrong, payload: {answer:option,point:question.points} })
                    }
                }} 
                className={`px-4 py-2 border ${answer === option && index === question.correctOption ? "bg-blue-500":"bg-red-500"}
                    ${answer !== option && "bg-transparent"}
                border-zinc-600 rounded-full w-1/2 hover:translate-x-5 transition duration-100 ease-linear`}>
                    {option}</button></li>
            ))}

        </ul>
    )
}
