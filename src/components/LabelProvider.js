import React, {createContext, useState} from 'react'

export const LabelContext = createContext({});

export function LabelProvider({children}) {
  const [labels, setLabels] = useState({
    Address: false,
    Entity: true,
    Intermediary: true,
    Other: false,
    Officer: true
  });

  const [nodeLimit, setNodeLimit] = useState(1500)
  return (
    <LabelContext.Provider value={{labels, setLabels, nodeLimit, setNodeLimit}}>
      {children}
    </LabelContext.Provider>
  )
}
