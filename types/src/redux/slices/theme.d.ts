import { TTheme } from "../../shared/types";
export interface UIState {
    theme: TTheme;
}
export declare const toggleTheme: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<{
    theme: TTheme;
}, "theme/toggleTheme">;
declare const _default: import("redux").Reducer<UIState>;
export default _default;
