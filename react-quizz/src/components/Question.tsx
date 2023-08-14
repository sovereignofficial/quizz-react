
export const CurrentQuestion = ({question}:{
    question:string
}) => {
  return (
    <div className="flex gap-3 p-3 justify-center items-center">
    <p>{question}</p>
  </div>
  )
}
