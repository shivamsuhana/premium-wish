import { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export function PageProvider({ children }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);

  const navigateTo = (page) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
    }, 300);
  };

  return (
    <PageContext.Provider value={{ 
      isUnlocked, 
      setIsUnlocked, 
      currentPage, 
      navigateTo,
      isLoading 
    }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePageContext() {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePageContext must be used within PageProvider');
  }
  return context;
}
