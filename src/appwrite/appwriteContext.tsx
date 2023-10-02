// appwriteContext.tsx
import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import {Client, Account} from 'appwrite';

type AppwriteContextProps = {
  account: Account | null;
  isInitialized: boolean;
};

const AppwriteContext = createContext<AppwriteContextProps>({
  account: null,
  isInitialized: false,
});

type AppwriteProviderProps = {
  children: ReactNode;
};

export const AppwriteProvider = ({children}: AppwriteProviderProps) => {
  const [account, setAccount] = useState<Account | null>(null);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    const initAppwrite = async () => {
      const client = new Client();
      client
        .setEndpoint('PROJECT_ENDPOINT') // Set your Appwrite Endpoint here.
        .setProject('PROJECT_ID'); // Set your Project ID here.
      const accountInstance = new Account(client);
      setAccount(accountInstance);
      setIsInitialized(true);
    };
    initAppwrite();
  }, []);

  return (
    <AppwriteContext.Provider value={{account, isInitialized}}>
      {children}
    </AppwriteContext.Provider>
  );
};

export const useAppwrite = () => {
  const context = useContext(AppwriteContext);
  if (context === undefined) {
    throw new Error('useAppwrite must be used within a AppwriteProvider');
  }
  return context;
};
