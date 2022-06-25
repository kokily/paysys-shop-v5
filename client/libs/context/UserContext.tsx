import { createContext, useContext, useState } from 'react';

type UserContextState = [MeType | null, (user: MeType | null) => void];

const UserContext = createContext<UserContextState | null>(null);

interface Props {
  children: React.ReactNode;
}

export function UserContextProvider({ children }: Props) {
  const userState = useState<MeType | null>(null);

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}

export function useUserState() {
  const userState = useContext(UserContext);

  if (!userState) {
    throw new Error('User Context is not used');
  }

  return userState;
}
