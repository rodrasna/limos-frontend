/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConsultaOverridesProps = {
    Consulta?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 618126"?: PrimitiveOverrideProps<IconProps>;
    "Luc\u00EDa Mart\u00EDn Montes"?: PrimitiveOverrideProps<TextProps>;
    "Bot\u00F3n Iniciar consulta"?: PrimitiveOverrideProps<ViewProps>;
    boton?: PrimitiveOverrideProps<ViewProps>;
    Texto?: PrimitiveOverrideProps<TextProps>;
    Hora?: PrimitiveOverrideProps<TextProps>;
    Seguimiento?: PrimitiveOverrideProps<TextProps>;
    "logo corazon"?: PrimitiveOverrideProps<ViewProps>;
    Vector741759?: PrimitiveOverrideProps<IconProps>;
    "logo location"?: PrimitiveOverrideProps<ViewProps>;
    "bxs-map 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector18109?: PrimitiveOverrideProps<IconProps>;
    "Mas opciones"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 618118"?: PrimitiveOverrideProps<IconProps>;
    "M\u00E1s opciones"?: PrimitiveOverrideProps<TextProps>;
    Foto?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 19"?: PrimitiveOverrideProps<IconProps>;
    "bxs-game (1) 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector17102?: PrimitiveOverrideProps<IconProps>;
    Box?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ConsultaProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ConsultaOverridesProps | undefined | null;
}>;
export default function Consulta(props: ConsultaProps): React.ReactElement;
