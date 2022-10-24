import { lazyWebpack } from "src/utils";

import { filters } from "../webpack";

export enum Look {
    FILLED,
    CUSTOM
}

export enum Position {
    TOP = "top",
    LEFT = "left",
    RIGHT = "right",
    BOTTOM = "bottom",
    CENTER = "center",
    WINDOW_CENTER = "window_center",
}

export interface SelectOption {
    value: any;
    label: string;
    disabled?: boolean;
    key?: React.Key;
}

interface SelectProps {
    options: SelectOption[];
    placeholder?: string;
    className?: string;
    isDisabled?: boolean;
    maxVisibleItems?: number;
    look?: Look;
    autoFocus?: boolean;
    popoutWidth?: number;
    clearable?: boolean;
    onClose?(): void;
    onOpen?(): void;
    renderOptionLabel?(option: SelectOption): React.ReactNode;
    renderOptionValue?(option: SelectOption[]): React.ReactNode;
    popoutClassName?: string;
    popoutPosition?: Position;
    optionClassName?: string;
    closeOnSelect?: boolean;
    select?(value: any): void;
    isSelected?(value: any): boolean;
    serialize?(value: any): string;
    clear?(): void;
    hideIcon?: boolean;
    "aria-label"?: string;
    "aria-labelledby"?: string;
}

export const Select: (props: SelectProps) => JSX.Element = lazyWebpack(filters.byCode("optionClassName", "popoutPosition", "autoFocus", "maxVisibleItems"));

export default Select;
