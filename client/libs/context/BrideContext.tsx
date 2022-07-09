import { createContext, useContext, useState } from 'react';

type BrideContextState = [boolean | null, (bride: boolean | null) => void];

const BrideContext = createContext<BrideContextState | null>(null);

interface Props {
  children: React.ReactNode;
}

export function BrideContextProvider({ children }: Props) {
  const brideState = useState<boolean | null>(null);

  return (
    <BrideContext.Provider value={brideState}>{children}</BrideContext.Provider>
  );
}

export function useBrideState() {
  const brideState = useContext(BrideContext);

  if (!brideState) {
    throw new Error('Bride Context is not used!');
  }

  return brideState;
}
