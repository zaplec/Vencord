import { lazyWebpack } from "../../utils";
import { filters } from "../webpack";

export enum ToastType {
    MESSAGE = 0,
    SUCCESS,
    FAILURE,
    CUSTOM
}

export enum ToastPosition {
    TOP = 0,
    BOTTOM,
}

export interface ToastOptions {
    position?: ToastPosition;
    timeout?: number;
    duration?: number;
}

export interface ToastProps {
    message: string;
    type: ToastType;
    id: string;
    options?: ToastOptions;
}

const showToast = lazyWebpack(filters.byCode("currentToast?"));
const popToast = lazyWebpack(filters.byCode("currentToast:null"));

export const ToastAPI = {
    show(props: ToastProps): void {
        return showToast(props);
    },

    pop(): void {
        return popToast();
    }
};

export default ToastAPI;
