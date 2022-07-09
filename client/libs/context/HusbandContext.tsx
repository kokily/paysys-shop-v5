import { createContext, useContext, useState } from 'react';

type HusbandContextState = [boolean | null, (husband: boolean | null) => void];

const HusbandContext = createContext<HusbandContextState | null>(null);

interface Props {
  children: React.ReactNode;
}

export function HusbandContextProvider({ children }: Props) {
  const husbandState = useState<boolean | null>(null);

  return (
    <HusbandContext.Provider value={husbandState}>
      {children}
    </HusbandContext.Provider>
  );
}

export function useHusbandState() {
  const husbandState = useContext(HusbandContext);

  if (!husbandState) {
    throw new Error('Husband Context is not used!');
  }

  return husbandState;
}
