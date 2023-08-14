
const ProgressBar = ({ value, max }:{
    value:number,
    max:number,
}) => {
  return (
    <div className="w-full bg-gray-300 rounded-full">
      <div
        style={{ width: `${(value / max) * 100}%` }}
        className="h-5 bg-blue-500 rounded-full "
      />
    </div>
  );
};

export default ProgressBar;
