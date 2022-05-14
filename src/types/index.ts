import { Dispatch } from "react";

export enum RoutesEnum{
    CreateCampaign = "campaigns/new"
}

export interface DefaultContext<T> {
    state: T;
    dispatch: null | Dispatch<any>;
  }