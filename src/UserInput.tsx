interface userInputProps {
    word: string
}

const UserInput = ({ word }: userInputProps) => {
    return (
        <form className="mt-8 flex justify-center gap-1 md:gap-2 flex-wrap">
            {
                word.split('').map((_char, i) => (
                    <input 
                        type="text" 
                        className="custom-input"
                        key={i}
                    /> 
                ))
            }   
            
        </form>
    )
}

export {
    UserInput
}