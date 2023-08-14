
export const FinishScreen = ({ points, maxPoints }: {
    points: number,
    maxPoints: number,
}) => {
    const percentage = (points / maxPoints) * 100;

    return (
        <section className="my-12 space-y-2">
            <div className="w-1/2 p-4 bg-blue-500/50 rounded-lg m-auto text-center">
                <span>You've scored <strong>{points}</strong> out of {maxPoints}. Total Score: {Math.ceil(percentage)}%</span>
            </div>
            <p className="text-center">Other tests are going to be uploaded on next update.</p>
        </section>
    )
}
