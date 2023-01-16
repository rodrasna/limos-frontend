/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Botonmasclientes(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="36px"
      height="50px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Botonmasclientes")}
      {...rest}
    >
      <Icon
        width="36px"
        height="36px"
        viewBox={{ minX: 0, minY: 0, width: 36, height: 36 }}
        paths={[
          {
            d: "M18 35C8.61116 35 1 27.3888 1 18L-1 18C-1 28.4934 7.50659 37 18 37L18 35ZM35 18C35 27.3888 27.3888 35 18 35L18 37C28.4934 37 37 28.4934 37 18L35 18ZM18 1C27.3888 1 35 8.61116 35 18L37 18C37 7.50659 28.4934 -1 18 -1L18 1ZM18 -1C7.50659 -1 -1 7.50659 -1 18L1 18C1 8.61116 8.61116 1 18 1L18 -1Z",
            stroke: "rgba(144,144,144,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 18C0 27.9411 8.05888 36 18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0C8.05888 0 0 8.05888 0 18Z",
            fill: "rgba(30,120,203,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="18%"
        bottom="10%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "circulo")}
      ></Icon>
      <Text
        fontFamily="Quicksand"
        fontSize="40px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="50px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="19.44%"
        right="16.67%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="+"
        {...getOverrideProps(overrides, "+")}
      ></Text>
    </View>
  );
}
