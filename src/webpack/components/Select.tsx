/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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
