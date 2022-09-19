import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'

/**
 * Types for createContext() require a defaultValue but it's
 * impossible to use useState outside of a function so hacking this
 * with null!
 */
const CommandPaletteContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>(null!)

type CommandPaletteProviderProps = {
  children: React.ReactNode
}

export function CommandPaletteProvider({
  children,
}: CommandPaletteProviderProps) {
  const [open, setOpen] = useState(false)
  return (
    <CommandPaletteContext.Provider value={[open, setOpen]}>
      {children}
    </CommandPaletteContext.Provider>
  )
}

export function useCommandPaletteContext() {
  return useContext(CommandPaletteContext)
}
