import { Dark } from "@/theme/Dark"
import { Light } from "@/theme/Light"
import { TemaType } from "@/theme/TemaType"
import { useState } from "react"
import { TemaContext } from "./TemaContext"
import { TemaProviderProps } from "./types"

export function TemaProvider({children}:TemaProviderProps){
    const [theme,setTheme] = useState<TemaType>(Light)
    const [ isDark, setIsDark] = useState<boolean>(false)

    function toggleTema() {
        setIsDark(!isDark)
        setTheme(isDark? Dark : Light)
    }

    return (
        <TemaContext.Provider value={{theme,toggleTema,isDark}}>
            {children}
        </TemaContext.Provider>
    )
}