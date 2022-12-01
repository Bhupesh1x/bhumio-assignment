import React, { createContext, useContext, useState, useEffect } from "react";

const TreeState = createContext(null);

export const TreeStateContext = ({ children }) => {
  const treeState = useState({});
  useEffect(() => {
    console.log(JSON.stringify(treeState).length);
  }, [treeState]);

  return <TreeState.Provider value={treeState}>{children}</TreeState.Provider>;
};

export const useTreeState = () => useContext(TreeState);
