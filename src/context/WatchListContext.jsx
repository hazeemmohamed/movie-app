import { createContext, useState } from "react";

export const WatchListContext = createContext();

export function WatchListProvider({ children }) {
  const [watchList, setWatchList] = useState([]);

  

  const addToWatchList = (movie) => {
    // avoid duplicates
    if (!watchList.find((m) => m.id === movie.id)) {
      setWatchList([...watchList, movie]);
    }
  };

  const removeFromWatchList = (id) => {
    setWatchList(watchList.filter((movie) => movie.id !== id));
  };

  return (
    <WatchListContext.Provider
      value={{ watchList, addToWatchList, removeFromWatchList }}
    >
      {children}
    </WatchListContext.Provider>
  );
}
