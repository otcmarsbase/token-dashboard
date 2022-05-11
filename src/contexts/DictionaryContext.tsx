import React, {ReactNode} from "react"
import { DICT } from "../data"

export const DictionaryContext = React.createContext<any>(DICT.en)

export const DictionaryProvider: React.FC<{children: ReactNode, lang: keyof typeof DICT }> = props =>
{
  return (
    <DictionaryContext.Provider value={DICT[props.lang]}>
      {props.children}
    </DictionaryContext.Provider>
  )
}
