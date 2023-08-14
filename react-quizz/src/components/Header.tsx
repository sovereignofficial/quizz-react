
export const Header = () => {
  return (
    <div className="p-4 space-x-5
    flex justify-center items-center">
        <img className="w-20 h-20 object-scale-down" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
        <h1 className="text-7xl font-medium relative">The <span className="text-blue-400">React</span> Quizz 
        <span className="text-sm text-gray-400 absolute -bottom-3 -right-8">BETA</span>
        </h1>
    </div>
  )
}
