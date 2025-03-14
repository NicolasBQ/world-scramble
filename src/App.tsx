// REACT
import { useEffect, useState } from "react";
// COMPONENTS
import { SelectedWord } from "./SelectedWord";
import { Tries } from "./Tries";
import { Mistakes } from "./Mistakes";
import { UserInput } from "./UserInput";
import { Button } from "./Button";

const WORDS = [
  "apple", "ocean", "lamp", "whisper", "thunder", "puzzle", "moonlight", "feather", "volcano", "echo",
  "breeze", "shadow", "melody", "compass", "sapphire", "gravity", "lantern", "jungle", "crystal", "mirage",
  "raindrop", "horizon", "thunderstorm", "serpent", "avalanche", "nomad", "chimera", "vortex", "twilight", "ember",
  "quicksand", "memento", "stardust", "obsidian", "midnight", "labyrinth", "specter", "phoenix", "solstice", "tundra",
  "velvet", "nebula", "orbit", "paradox", "relic", "saffron", "zephyr", "fossil", "lagoon", "runestone"
];

function App() {
  const [word, setWord] = useState<Array<string>>([]);
  const [mistakes, setMistakes] = useState<Array<string>>([]);
  
  const selectWord = () => {
    const randWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    const wordArr = randWord.split('');
    console.log(wordArr);
    setWord(wordArr);
  }

  const checkWord = (userInput: Array<string>): boolean => {
    if (userInput.join('') === word.join('')) return true;
    return false;
  }

  const handleWin = () => {
    console.log('win'); 
    setMistakes([]);
  }

  const handleLose = (userInput: Array<string>) => {
    const newMistakes = [];
    for(let i in word) {
      if(word[i] !== userInput[i]) {
        console.log(userInput[i]);
        newMistakes.push(userInput[i]);
        setMistakes(newMistakes);
      }
    }
  }

  const reset = () => {
    console.log('reset');
  }

  useEffect(() => { 
    selectWord();
  }, [])


  return (
    <>
      <main className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-purple to-pink">
        <section className="bg-dark-blue p-4 md:p-10 rounded-xl w-4/5 md:max-w-xl">
            <h1 className="bg-gradient-to-r from-purple to-pink inline-block text-transparent bg-clip-text text-xl font-black text-center w-full">
              World Scramblle
            </h1>

            <SelectedWord word={word} />

            <div className="flex flex-col gap-2 md:flex-row justify-between mt-8">
                <Tries />
                <Mistakes 
                  mistakes={mistakes}
                />
            </div>

            <UserInput 
              word={word} 
              checkWord={checkWord}
              handleWin={handleWin}
              handleLose={handleLose}
            />

            <div className="mt-8 flex justify-center gap-2">
                <Button eventFunction={selectWord}>
                    Random
                </Button>
                <Button eventFunction={reset}>
                    Reset
                </Button>
            </div>
        </section>
      </main>
    </>
  )
}

export default App
