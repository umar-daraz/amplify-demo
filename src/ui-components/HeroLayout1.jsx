/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function HeroLayout1(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "LOREM IPSUM": {},
        "Ut enim ad minim veniam quis nostrud": {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.":
          {},
        Message: {},
        Button: {},
        HeroMessage: {},
        Left: {},
        image: {},
        Right: {},
        HeroLayout1: {},
      },
      variantValues: { mode: "Light" },
    },
    {
      overrides: {
        "LOREM IPSUM": { color: "rgba(255,255,255,1)" },
        "Ut enim ad minim veniam quis nostrud": {
          color: "rgba(255,255,255,1)",
        },
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.":
          { color: "rgba(255,255,255,1)" },
        Message: {},
        Button: {},
        HeroMessage: {},
        Left: { backgroundColor: "rgba(0,0,0,1)" },
        image: { alignSelf: "stretch", objectFit: "cover" },
        Right: {},
        HeroLayout1: {},
      },
      variantValues: { mode: "Dark" },
    },
  ];
  const mergeVariantsAndOverrides = (variants, overrides) => {
    const overrideKeys = new Set(Object.keys(overrides));
    const sharedKeys = Object.keys(variants).filter((variantKey) =>
      overrideKeys.has(variantKey)
    );
    const merged = Object.fromEntries(
      sharedKeys.map((sharedKey) => [
        sharedKey,
        { ...variants[sharedKey], ...overrides[sharedKey] },
      ])
    );
    return {
      ...variants,
      ...overrides,
      ...merged,
    };
  };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="1440px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="10px"
        direction="column"
        height="564px"
        justifyContent="center"
        alignItems="center"
        grow="1"
        basis="720px"
        alignSelf="stretch"
        overflow="hidden"
        position="relative"
        padding="120px 120px 120px 120px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          gap="24px"
          direction="column"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.49px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="LOREM IPSUM"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
          <Flex
            gap="16px"
            direction="column"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[0]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="40px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="48px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Ut enim ad minim veniam quis nostrud"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Text[0]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Text[1]"
              )}
            ></Text>
          </Flex>
          <Button
            display="flex"
            shrink="0"
            width="206px"
            size="large"
            variation="primary"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Button[0]")}
          ></Button>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        height="564px"
        justifyContent="center"
        alignItems="center"
        grow="1"
        basis="720px"
        alignSelf="stretch"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Image
          width="720px"
          height="564px"
          grow="1"
          basis="564px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[1].Image[0]")}
        ></Image>
      </Flex>
    </Flex>
  );
}
