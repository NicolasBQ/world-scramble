import React, { useRef, useState } from "react"

interface userInputProps {
    word: Array<string>,
    checkWord: (userInput: Array<string>) => void
}

const UserInput = ({ word, checkWord }: userInputProps) => {
    const [inputValues, setInputValues] = useState<Array<string>>(Array(word.length).fill(''));
    const inputRef = useRef<Array<HTMLInputElement | null>>([]);

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>,index: number) => {
        if(event.key === 'Backspace') {
            inputRef.current[index - 1]?.focus();
        } else if(index < word.length - 1) {
            inputRef.current[index + 1]?.focus();
        } else {
            // Go and check if the word is correct
            checkWord(inputValues);
        }
    }

    const handleInputValues = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newValues = [...inputValues];
        newValues[index] = event.target.value;
        setInputValues(newValues);
      }

    return (
        <form className="mt-8 flex justify-center gap-1 md:gap-2 flex-wrap">
            {
                word.map((_char, i) => (
                    <input 
                        type="text" 
                        className="custom-input"
                        key={i}
                        ref={el => inputRef.current[i] = el}
                        maxLength={1}
                        onKeyUp={(e) => handleKeyUp(e, i)}
                        onChange={(e) => handleInputValues(e, i)}
                    /> 
                ))
            }   
            
        </form>
    )
}

export {
    UserInput
}