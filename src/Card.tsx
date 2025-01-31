import { SelectedWord } from "./SelectedWord";
import { Tries } from "./Tries";
import { Mistakes } from "./Mistakes";
import { UserInput } from "./UserInput";
import { Button } from "./Button";

const Card = () => {
    return (
        <section className="bg-dark-blue p-4 md:p-10 rounded-xl w-4/5 md:w-1/3">
            <h1 className="bg-gradient-to-r from-purple to-pink inline-block text-transparent bg-clip-text text-xl font-black text-center w-full">
              World Scramblle
            </h1>

            <SelectedWord />

            <div className="flex flex-col gap-2 md:flex-row justify-between mt-8">
                <Tries />
                <Mistakes />
            </div>

            <UserInput />

            <div className="mt-8 flex justify-center gap-2">
                <Button>
                    Random
                </Button>
                <Button>
                    Reset
                </Button>
            </div>
        </section>
    )
}

export {
    Card
}