import React, { useState } from "react"
import LoadingPage from "./Loading"
import { Header } from "./components/Header"
import { useQuestions } from "./hooks/useQuestions"
import { StartScreen } from "./components/StartScreen"
import { Quiz } from "./components/Quiz"
import { Footer } from "./components/Footer"

function App() {
  const { questions } = useQuestions();
  const [started, isStarted] = useState(false);

  const maxPossiblePoints = questions.questions ? questions?.questions.reduce((prev,curr)=>{
    return prev + curr.points
  },0) : 0


  return (
    <>
      {questions.status !== "FETCHED" ? (
        <LoadingPage />
      ) : (
        <React.Fragment>
          <Header />
          {!started && questions.questions ? (
            <StartScreen questionsLength={questions.questions?.length ?? 0}
              isStarted={isStarted} />
          ) : (
            <Quiz questions={questions.questions ?? []} maxPossiblePoints = {maxPossiblePoints} />
          )}
          <Footer/>
        </React.Fragment>
      )}
    </>
  )
}

export default App
