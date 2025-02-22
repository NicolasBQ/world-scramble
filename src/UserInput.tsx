import React, { useRef } from "react"

interface userInputProps {
    word: string
}

const UserInput = ({ word }: userInputProps) => {
    const inputRef = useRef<Array<HTMLInputElement | null>>([]);

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>,index: number) => {
        if(event.key === 'Backspace' && index >= 0) {
            inputRef.current[index - 1]?.focus();
        } else if(index < word.length - 1) {
            inputRef.current[index + 1]?.focus();
        }
    }

    return (
        <form className="mt-8 flex justify-center gap-1 md:gap-2 flex-wrap">
            {
                word.split('').map((_char, i) => (
                    <input 
                        type="text" 
                        className="custom-input"
                        key={i}
                        ref={el => inputRef.current[i] = el}
                        maxLength={1}
                        onKeyUp={(e) => handleKeyUp(e, i)}
                    /> 
                ))
            }   
            
        </form>
    )
}

export {
    UserInput
}