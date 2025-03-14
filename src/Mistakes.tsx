interface mistakesProps {
    mistakes: Array<string>
}

const Mistakes = ({ mistakes }: mistakesProps) => {
    console.log(mistakes);
    return (
        <div className="flex gap-2 items-center">
            <p className="text-white font-medium font-outfit">Mistakes:</p>
            <p className="text-white font-medium font-outfit">{mistakes.join(', ')}</p>
        </div>
    )
}   

export {
    Mistakes
}