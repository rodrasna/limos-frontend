/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DietaOverridesProps = {
    Dieta?: PrimitiveOverrideProps<ViewProps>;
    Fondo?: PrimitiveOverrideProps<IconProps>;
    Cliente?: PrimitiveOverrideProps<TextProps>;
    Foto?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 19"?: PrimitiveOverrideProps<IconProps>;
    "bxs-game (1) 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector18169?: PrimitiveOverrideProps<IconProps>;
    entrega?: PrimitiveOverrideProps<TextProps>;
    "boton hacer dieta"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Hacer dieta"?: PrimitiveOverrideProps<TextProps>;
    "boton opciones"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<IconProps>;
    "M\u00E1s opciones"?: PrimitiveOverrideProps<TextProps>;
    "logo reloj"?: PrimitiveOverrideProps<ViewProps>;
    Vector21917?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type DietaProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DietaOverridesProps | undefined | null;
}>;
export default function Dieta(props: DietaProps): React.ReactElement;
