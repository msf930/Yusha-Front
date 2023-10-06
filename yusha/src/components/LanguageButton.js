import { useContext } from "react";
import { LanguageContext } from "../multilingualContext/context.js";
import Toggle from 'react-toggle'
import KIcon from "./KIcon";
import USAIcon from "./USAIcon";

export default function LanguageButton(){
    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <>
            {/*<button onClick={toggleLanguage}> {language} </button>*/}
            <label className="flex align-items-center justify-items-center">
                <USAIcon/>
                <Toggle
                    defaultChecked={language.english}
                    icons={false}
                    onChange={toggleLanguage} />
                <KIcon/>
            </label>
        </>
    );
};