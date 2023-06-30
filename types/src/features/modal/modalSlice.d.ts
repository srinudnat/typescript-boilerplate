import { RootState } from '../../config/store';
interface InitialState {
    isOpen: boolean;
    text: string;
}
export declare const modalSlice: import("@reduxjs/toolkit").Slice<InitialState, {
    toggleModal: (state: import("immer/dist/internal").WritableDraft<InitialState>) => void;
}, "modal">;
export declare const toggleModal: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"modal/toggleModal">;
export declare const isOpen: (state: RootState) => boolean;
declare const _default: import("redux").Reducer<InitialState>;
export default _default;
