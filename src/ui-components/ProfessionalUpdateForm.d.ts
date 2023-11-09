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
export declare type ProfessionalUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    specialty?: string;
};
export declare type ProfessionalUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    specialty?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfessionalUpdateFormOverridesProps = {
    ProfessionalUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    specialty?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfessionalUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProfessionalUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    professional?: any;
    onSubmit?: (fields: ProfessionalUpdateFormInputValues) => ProfessionalUpdateFormInputValues;
    onSuccess?: (fields: ProfessionalUpdateFormInputValues) => void;
    onError?: (fields: ProfessionalUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfessionalUpdateFormInputValues) => ProfessionalUpdateFormInputValues;
    onValidate?: ProfessionalUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProfessionalUpdateForm(props: ProfessionalUpdateFormProps): React.ReactElement;
