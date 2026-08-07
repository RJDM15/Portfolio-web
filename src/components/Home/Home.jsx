import { HomeData } from "../../Data/Home/home"
import { Topbar } from "./Topbar"

export const Home = ({ language }) => {

    const data = HomeData.translations[language];

    return (
        <div className="bg-tertiary min-h-screen">
            <Topbar language={language} />
        </div>
    )
}
