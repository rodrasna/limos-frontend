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
export declare type ClienteUpdateFormInputValues = {
    nombre?: string;
    lugar?: string;
    ultimaConsulta?: string;
    profesional?: string;
    email?: string;
    phoneNumber?: string;
    peso?: number;
};
export declare type ClienteUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    lugar?: ValidationFunction<string>;
    ultimaConsulta?: ValidationFunction<string>;
    profesional?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    peso?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClienteUpdateFormOverridesProps = {
    ClienteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    lugar?: PrimitiveOverrideProps<TextFieldProps>;
    ultimaConsulta?: PrimitiveOverrideProps<TextFieldProps>;
    profesional?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    peso?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClienteUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClienteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cliente?: any;
    onSubmit?: (fields: ClienteUpdateFormInputValues) => ClienteUpdateFormInputValues;
    onSuccess?: (fields: ClienteUpdateFormInputValues) => void;
    onError?: (fields: ClienteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClienteUpdateFormInputValues) => ClienteUpdateFormInputValues;
    onValidate?: ClienteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClienteUpdateForm(props: ClienteUpdateFormProps): React.ReactElement;
