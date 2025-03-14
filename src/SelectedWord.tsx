import { useEffect, useState } from "react";

interface selectedWordProps {
    word: Array<string>
}

const shuffleWord = (word: Array<string>) => {
    const wordArr = [...word];
    // Knuth Shuffle algorithm to shuffle the word
    for(let i = wordArr.length - 1; i >= 0; i--) {
        const randPosition = Math.floor(Math.random() * i);
        const temp = wordArr[randPosition];
        wordArr[randPosition] = wordArr[i];
        wordArr[i] = temp;
    }

    return wordArr;
}

const SelectedWord = ({ word }: selectedWordProps) => {
    const [joinedWord, setJoinedWord] = useState<string>('');

    useEffect(() => {
        setJoinedWord(shuffleWord(word).join(''));
    }, [word])

    return (
        <div className="w-full py-5 px-3 mt-8 bg-dark-grey text-center shadow-custom rounded">
            <p className="text-xl md:text-3xl text-white truncate font-outfit tracking-custom text-center">{joinedWord}</p>
            {
                word.length > 9 && <p className="text-grey text-md tracking-small md:hidden">({joinedWord})</p>
            }
        </div>
    )
}

export {
    SelectedWord
}