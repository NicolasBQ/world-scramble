interface selectedWordProps {
    word: string
}

const SelectedWord = ({ word }: selectedWordProps) => {
    return (
        <div className="w-full py-5 px-3 mt-8 bg-dark-grey text-center shadow-custom rounded">
            <p className="text-xl md:text-3xl text-white truncate font-outfit tracking-custom text-center">{word}</p>
            {
                word.length > 9 && <p className="text-grey text-md tracking-small md:hidden">({word})</p>
            }
        </div>
    )
}

export {
    SelectedWord
}