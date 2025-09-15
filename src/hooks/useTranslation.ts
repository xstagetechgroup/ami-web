import { useEffect, useState } from "react";
import pt from "../locales/pt.json";
import en from "../locales/en.json";
import fr from "../locales/fr.json";

type Language = "pt" | "en" | "fr";
const translations = { pt, en, fr };

export function useTranslation() {
    const [lang, setLang] = useState<Language>("pt");
    const [t, setT] = useState(pt);

    useEffect(() => {
        const storedLang = localStorage.getItem("lang") as Language;
        if (storedLang && translations[storedLang]) {
            setLang(storedLang);
            setT(translations[storedLang]);
        }
    }, []);

    const changeLanguage = (newLang: Language) => {
        setLang(newLang);
        setT(translations[newLang]);
        localStorage.setItem("lang", newLang);
        window.location.reload(); // 🔄 força o reload da página
    };

    return { t, lang, changeLanguage };
}
