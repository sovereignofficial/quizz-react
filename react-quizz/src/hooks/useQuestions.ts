import { useEffect, useReducer } from "react"

enum QuestionStatus {
    Idle = "IDLE",
    Fetching = "FETCHING",
    Fetched = "FETCHED",
    Failed = "FAILED",
}


export type Question = {
    question: string,
    options: string[],
    correctOption:number,
    points:number
}

 interface Questions {
    questions: Question[] | null,
    status: QuestionStatus,
    error: string | null
}

type ReducerAction = { type: QuestionStatus.Failed, payload: string } |
{ type: QuestionStatus.Fetching } |
{ type: QuestionStatus.Fetched, payload: Question[] }

const initialState: Questions = {
    "questions": null,
    "status": QuestionStatus.Idle,
    "error": null
}
const reducer = (state: Questions, action: ReducerAction) => {
    switch (action.type) {
        case QuestionStatus.Failed:
            return { ...state, error: action.payload, status: QuestionStatus.Failed };
        case QuestionStatus.Fetching:
            return { ...state, status: QuestionStatus.Fetching };
        case QuestionStatus.Fetched:
            return { ...state, questions: action.payload, status: QuestionStatus.Fetched };
        default:
            return state;
    }
}
export const useQuestions = () => {
    const [questions, dispacth] = useReducer(reducer, initialState);


    const getQuestions = async () => {
        dispacth({type:QuestionStatus.Fetching});
        await fetch('http://localhost:8080/questions')
            .then(res => res.json())
            .then(data => dispacth({ type: QuestionStatus.Fetched, payload: data }))
            .catch(err => dispacth({ type: QuestionStatus.Failed, payload: err }));
    }

    useEffect(() => {
        getQuestions();
    }, [])

    return {
        questions
    }
}

