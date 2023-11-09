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
export declare type ProfessionalCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    specialty?: string;
};
export declare type ProfessionalCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    specialty?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfessionalCreateFormOverridesProps = {
    ProfessionalCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    specialty?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfessionalCreateFormProps = React.PropsWithChildren<{
    overrides?: ProfessionalCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProfessionalCreateFormInputValues) => ProfessionalCreateFormInputValues;
    onSuccess?: (fields: ProfessionalCreateFormInputValues) => void;
    onError?: (fields: ProfessionalCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfessionalCreateFormInputValues) => ProfessionalCreateFormInputValues;
    onValidate?: ProfessionalCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProfessionalCreateForm(props: ProfessionalCreateFormProps): React.ReactElement;
