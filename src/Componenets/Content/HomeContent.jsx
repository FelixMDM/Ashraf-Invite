import { HomeGif } from "./HomeGif";
import { HomeTitle } from "./HomeTitle";

export const HomeContent = () => {
    return (
        <div className="grid grid-row-1 grid-flow-col
                        w-screen h-screen top-16
                        bg-gray-300">
            <HomeTitle />
        </div>
    );
}