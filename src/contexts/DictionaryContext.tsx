import React, {ReactNode} from "react"
import { DICT, LocalizedDictionary } from "../data"

export const DictionaryContext = React.createContext<LocalizedDictionary>(DICT.en)

export const DictionaryProvider: React.FC<{children: ReactNode, lang: keyof typeof DICT }> = props =>
{
  return (
    <DictionaryContext.Provider value={DICT[props.lang]}>
      {props.children}
    </DictionaryContext.Provider>
  )
}
