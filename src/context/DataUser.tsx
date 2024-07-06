'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useState, useEffect } from 'react';

import { useSession } from 'next-auth/react';

interface ResponseUser {
  id: number;
  username: string;
  email: string;
  role: string;
  status: string;
  fullname: string;
  phone: string;
  image: string;
  address: string;
  city: string;
  token: string;
  refreshToken: string;
}

interface DataUserContextType {
  userData: ResponseUser | null;
  removeData: () => void;
  refreshData: () => void;
}

const DataUserContext = createContext<DataUserContextType | undefined>(
  undefined,
);

interface DataUserContextProviderProps {
  children: ReactNode;
}

const DataUserContextProvider = ({
  children,
}: DataUserContextProviderProps) => {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState<ResponseUser | null>(null);

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      setUserData(session.user);
    }
  }, [session, status]);

  const removeData = () => {
    setUserData(null);
  };

  const refreshData = () => {
    if (status === 'authenticated' && session?.user) {
      setUserData(session.user);
    }
  };

  return (
    <DataUserContext.Provider value={{ userData, removeData, refreshData }}>
      {children}
    </DataUserContext.Provider>
  );
};

const useDataUser = () => {
  const context = useContext(DataUserContext);

  if (context === undefined) {
    throw new Error(
      'useDataUser must be used within a DataUserContextProvider',
    );
  }

  return context;
};

export { DataUserContextProvider, useDataUser };
