/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfesionalOverridesProps = {
    Profesional?: PrimitiveOverrideProps<ViewProps>;
    Fondo?: PrimitiveOverrideProps<IconProps>;
    Labor?: PrimitiveOverrideProps<TextProps>;
    Nombre?: PrimitiveOverrideProps<TextProps>;
    "boton verMas"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Ver m\u00E1s"?: PrimitiveOverrideProps<TextProps>;
    "boton eliminar"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<IconProps>;
    "Group 54"?: PrimitiveOverrideProps<ViewProps>;
    Eliminar?: PrimitiveOverrideProps<TextProps>;
    Vector701181?: PrimitiveOverrideProps<IconProps>;
    Foto?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 19"?: PrimitiveOverrideProps<IconProps>;
    "bxs-game (1) 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector7024?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ProfesionalProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ProfesionalOverridesProps | undefined | null;
}>;
export default function Profesional(props: ProfesionalProps): React.ReactElement;
