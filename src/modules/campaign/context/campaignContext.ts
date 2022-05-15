

import { State } from "../types/index";
import React, { useContext } from "react";
import { DefaultContext } from "../../../types";

export const initialState: State = {
  selectedContract: undefined,
  isManager: false
};

const defaultVal: DefaultContext<State> = {
  state: initialState,
  dispatch: null
};

export const CampaignContex = React.createContext(defaultVal);

export function useCampaigContext() {
  return useContext(CampaignContex);
}