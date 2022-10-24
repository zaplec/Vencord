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

import { filters, proxyWaitFor } from "../webpack";

export enum Tag {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
}

interface FormTitleProps extends React.PropsWithChildren<React.HTMLProps<HTMLDivElement>> {
    tag?: Tag | `${Tag}`;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    faded?: boolean;
}

interface FormSectionProps extends React.PropsWithChildren {
    title?: React.ReactNode;
    icon?: React.ReactNode;
    titleId?: string;
    tag?: Tag | `${Tag}`;
    titleClassName?: string;
}

export enum FormTextType {
    DEFAULT = "default",
    INPUT_PLACEHOLDER = "placeholder",
    DESCRIPTION = "description",
    LABEL_BOLD = "labelBold",
    LABEL_SELECTED = "labelSelected",
    LABEL_DESCRIPTOR = "labelDescriptor",
    ERROR = "error",
    SUCCESS = "success",
}

interface FormTextProps extends React.PropsWithChildren<React.HTMLProps<HTMLDivElement>> {
    type?: FormTextType;
    selectable?: boolean;
}

interface FormDividerProps {
    className?: string;
    style?: React.CSSProperties;
}

export const FormTitle: (props: FormTitleProps) => JSX.Element = proxyWaitFor(filters.byCode("errorSeparator"));
export const FormSection: (props: FormSectionProps) => JSX.Element = proxyWaitFor(filters.byCode("titleClassName", "sectionTitle"));
export const FormText: (props: FormTextProps) => JSX.Element = proxyWaitFor(m => m.Types?.INPUT_PLACEHOLDER);
export const FormDivider: (props: FormDividerProps) => JSX.Element = proxyWaitFor(m => {
    if (typeof m !== "function") return false;
    const s = m.toString();
    return s.length < 200 && s.includes("divider");
});

export const Forms = {
    FormTitle,
    FormSection,
    FormText,
    FormDivider
};

export default Forms;
