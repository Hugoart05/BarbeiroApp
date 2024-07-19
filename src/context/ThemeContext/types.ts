import { TemaType } from "@/theme/TemaType";
import { ReactNode } from "react";

export interface TemaContextType{
    theme:TemaType;
    toggleTema: ()=>void
    isDark:boolean;
}

export interface TemaProviderProps{
    children:ReactNode
}