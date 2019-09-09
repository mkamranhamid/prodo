import { createUniverseWatcher, ProdoContext } from "./connect";
import { createModel } from "./model";
import {
  Comp,
  PluginActionCtx,
  PluginDispatch,
  PluginViewCtx,
  ProdoPlugin,
  Provider,
  Store,
} from "./types";

export const ProdoProvider = ProdoContext.Provider;

export {
  Comp,
  PluginActionCtx,
  PluginDispatch,
  PluginViewCtx,
  ProdoPlugin,
  Store,
  createModel,
  createUniverseWatcher,
  Provider,
};
