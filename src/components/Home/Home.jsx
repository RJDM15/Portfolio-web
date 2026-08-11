import { HomeData } from "../../Data/Home/home"
import { Topbar } from "./Topbar"
import { AboutMe } from "../First Section/AboutMe"
import { Experience } from "../Second Section/Experience"
import { Tools } from "../Third Section/Tools"

export const Home = ({ language }) => {

    const data = HomeData.translations[language];

    return (
        <div className="bg-tertiary min-h-screen">
            <Topbar language={language} />
            <main className="flex flex-col mt-30 gap-y-30 px-section 2xl:px-50">
                <AboutMe language={language} />
                <Experience language={language} />
                <Tools language={language} />
            </main>
        </div>
    )
}
