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
export declare type DietUpdateFormInputValues = {
    clientID?: string;
    client?: string;
    dateDelivery?: string;
    dateConsult?: string;
    timeRealization?: string;
    calories?: number;
};
export declare type DietUpdateFormValidationValues = {
    clientID?: ValidationFunction<string>;
    client?: ValidationFunction<string>;
    dateDelivery?: ValidationFunction<string>;
    dateConsult?: ValidationFunction<string>;
    timeRealization?: ValidationFunction<string>;
    calories?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DietUpdateFormOverridesProps = {
    DietUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    clientID?: PrimitiveOverrideProps<TextFieldProps>;
    client?: PrimitiveOverrideProps<TextFieldProps>;
    dateDelivery?: PrimitiveOverrideProps<TextFieldProps>;
    dateConsult?: PrimitiveOverrideProps<TextFieldProps>;
    timeRealization?: PrimitiveOverrideProps<TextFieldProps>;
    calories?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DietUpdateFormProps = React.PropsWithChildren<{
    overrides?: DietUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    diet?: any;
    onSubmit?: (fields: DietUpdateFormInputValues) => DietUpdateFormInputValues;
    onSuccess?: (fields: DietUpdateFormInputValues) => void;
    onError?: (fields: DietUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DietUpdateFormInputValues) => DietUpdateFormInputValues;
    onValidate?: DietUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DietUpdateForm(props: DietUpdateFormProps): React.ReactElement;
