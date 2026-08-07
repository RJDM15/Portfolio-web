import { HomeData } from "../../Data/Home/home"

export const Home = ({ language }) => {

    const data = HomeData.translations[language];

    return (
        <div className="bg-tertiary min-h-screen">
            <h1 className="text-neutral-light font-bold">{data.title}</h1>
        </div>
    )
}
