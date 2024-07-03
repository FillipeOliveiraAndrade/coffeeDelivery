import { useContext } from "react";

import { AppContext } from "src/context/AppContext";

export function useApp() {
  const context = useContext(AppContext);
  return context;
}
