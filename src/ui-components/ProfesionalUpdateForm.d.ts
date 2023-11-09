/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProfesionalUpdateFormInputValues = {
    nombre?: string;
    apellido?: string;
};
export declare type ProfesionalUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    apellido?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfesionalUpdateFormOverridesProps = {
    ProfesionalUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    apellido?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfesionalUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProfesionalUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    profesional?: any;
    onSubmit?: (fields: ProfesionalUpdateFormInputValues) => ProfesionalUpdateFormInputValues;
    onSuccess?: (fields: ProfesionalUpdateFormInputValues) => void;
    onError?: (fields: ProfesionalUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfesionalUpdateFormInputValues) => ProfesionalUpdateFormInputValues;
    onValidate?: ProfesionalUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProfesionalUpdateForm(props: ProfesionalUpdateFormProps): React.ReactElement;
