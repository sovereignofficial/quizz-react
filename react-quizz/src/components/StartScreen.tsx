import React, { SetStateAction } from "react"

export const StartScreen = ({questionsLength,isStarted}:
    {
        questionsLength:number,
        isStarted:React.Dispatch<SetStateAction<boolean>>
    }) => {
  return (
    <div className="text-center my-5">
        <h2 className="text-3xl font-medium">Welcome to The <span className="text-blue-300">React</span> Quizz</h2>
        <p className="font-medium text-white/80">{questionsLength} questions to test your React mastery</p>
        <button className="px-4 py-2  bg-blue-500/80
        rounded-full text-center my-5 w-32 font-medium" onClick={()=>isStarted(true)}>Let's Start</button>
    </div>
  )
}
