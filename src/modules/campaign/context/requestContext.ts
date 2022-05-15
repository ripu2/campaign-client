

import React, { useContext } from "react";
import { DefaultContext } from "../../../types";
import { RequestState } from "../types";

export const initialState: RequestState = {
    request: undefined
};

const defaultVal: DefaultContext<RequestState> = {
    state: initialState,
    dispatch: null
};

export const RequestContext = React.createContext(defaultVal);

export function useRequesrContext() {
    return useContext(RequestContext);
}