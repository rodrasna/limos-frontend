/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClienteviewOverridesProps = {
    Clienteview?: PrimitiveOverrideProps<ViewProps>;
    Fondo?: PrimitiveOverrideProps<IconProps>;
    Nombre?: PrimitiveOverrideProps<TextProps>;
    "boton verPerfil"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Ver Perfil"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 11"?: PrimitiveOverrideProps<ViewProps>;
    Foto?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 19"?: PrimitiveOverrideProps<IconProps>;
    "bxs-game (1) 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector70101?: PrimitiveOverrideProps<IconProps>;
    Box?: PrimitiveOverrideProps<ViewProps>;
    box?: PrimitiveOverrideProps<TextProps>;
    "location logo"?: PrimitiveOverrideProps<ViewProps>;
    Vector70105?: PrimitiveOverrideProps<IconProps>;
    Dietista?: PrimitiveOverrideProps<ViewProps>;
    dietista?: PrimitiveOverrideProps<TextProps>;
    "user logo"?: PrimitiveOverrideProps<IconProps>;
    Conexion?: PrimitiveOverrideProps<ViewProps>;
    "ultima vez"?: PrimitiveOverrideProps<TextProps>;
    "clock logo"?: PrimitiveOverrideProps<IconProps>;
    Tag?: PrimitiveOverrideProps<ViewProps>;
    tag?: PrimitiveOverrideProps<TextProps>;
    "tag logo"?: PrimitiveOverrideProps<ViewProps>;
    Vector70108?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ClienteviewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ClienteviewOverridesProps | undefined | null;
}>;
export default function Clienteview(props: ClienteviewProps): React.ReactElement;
