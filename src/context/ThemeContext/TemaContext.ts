import { createContext, useContext } from "react";
import { TemaContextType } from "./types";

export const TemaContext = createContext<TemaContextType >({} as TemaContextType);
export function useCustomTema(){
    return useContext(TemaContext);
}