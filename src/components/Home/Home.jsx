import { HomeData } from "../../Data/Home/home"
import { Topbar } from "./Topbar"
import { AboutMe } from "../First Section/AboutMe"
import { Experience } from "../Second Section/Experience"
import { ContactMe } from "../Third Section/ContactMe"

export const Home = ({ language }) => {

    const data = HomeData.translations[language];

    return (
        <div className="bg-tertiary min-h-screen">
            <Topbar language={language} />
            <main className="flex flex-col mt-30 px-section">
                <AboutMe language={language} />
                <Experience language={language} />
                <ContactMe language={language} />
            </main>
        </div>
    )
}
