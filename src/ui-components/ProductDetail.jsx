/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Divider,
  Flex,
  Image,
  Rating,
  Text,
} from "@aws-amplify/ui-react";
export default function ProductDetail(props) {
  const { product, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="24px"
      direction="row"
      width="1160px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="32px"
        direction="column"
        width="740px"
        grow="1"
        basis="740px"
        height="1098px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Image
          height="480px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          src={product?.image_url}
          {...getOverrideProps(overrides, "Flex.Flex[0].Image[0]")}
        ></Image>
        <Flex
          gap="32px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Flex
            gap="8px"
            direction="column"
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
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={product?.name}
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Text[0]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
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
              children={product?.description}
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Text[1]"
              )}
            ></Text>
          </Flex>
          <Divider
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Divider[0]")}
          ></Divider>
          <Flex
            gap="8px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[1]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Highlights"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[1].Text[0]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
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
              children="    Hand cut and sewn locally&#xA;    Dyed with our proprietary colors&#xA;    Pre-washed & pre-shrunk&#xA;    Ultra-soft 100% cotton"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[1].Text[1]"
              )}
            ></Text>
          </Flex>
          <Divider
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Divider[1]")}
          ></Divider>
          <Flex
            gap="8px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[2]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Details"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[2].Text[0]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
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
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[2].Text[1]"
              )}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <Divider
        width="1px"
        height="1098px"
        shrink="0"
        size="small"
        orientation="vertical"
        {...getOverrideProps(overrides, "Flex.Divider[0]")}
      ></Divider>
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        height="345px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="48px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={product?.price}
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[0]")}
        ></Text>
        <Flex
          gap="16px"
          direction="row"
          alignItems="flex-start"
          shrink="0"
          width="238px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0]")}
        >
          <Rating
            display="flex"
            shrink="0"
            height="24px"
            size="default"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Rating[0]")}
          ></Rating>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="18px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            textDecoration="underline"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="12 reviews"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Text[0]")}
          ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="371px"
          height="225px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Flex.Flex[1].Flex[1]")}
        >
          <Button
            position="absolute"
            padding="8px 16px 8px 16px"
            display="flex"
            top="189px"
            left="0px"
            width="371px"
            size="default"
            variation="primary"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Button[0]")}
          ></Button>
          <Flex
            gap="24px"
            position="absolute"
            top="40px"
            left="0px"
            direction="row"
            alignItems="flex-start"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Flex[0]")}
          >
            <Button
              backgroundColor="rgba(239,240,240,1)"
              display="flex"
              width="75px"
              shrink="0"
              height="48px"
              size="large"
              isDisabled={true}
              variation="primary"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[1].Flex[0].Button[0]"
              )}
            ></Button>
            <Button
              display="flex"
              width="75px"
              shrink="0"
              height="48px"
              size="large"
              variation="primary"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[1].Flex[0].Button[1]"
              )}
            ></Button>
            <Button
              display="flex"
              width="74px"
              shrink="0"
              height="48px"
              size="large"
              variation="primary"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[1].Flex[0].Button[2]"
              )}
            ></Button>
            <Button
              display="flex"
              width="75px"
              shrink="0"
              height="48px"
              size="large"
              variation="primary"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[1].Flex[0].Button[3]"
              )}
            ></Button>
          </Flex>
          <Flex
            gap="24px"
            position="absolute"
            top="112px"
            left="0px"
            direction="row"
            alignItems="flex-start"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Flex[1]")}
          >
            <Button
              gap="24px"
              display="flex"
              width="75px"
              shrink="0"
              height="48px"
              size="large"
              variation="primary"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[1].Flex[1].Button[0]"
              )}
            ></Button>
            <Button
              gap="24px"
              display="flex"
              width="75px"
              shrink="0"
              height="48px"
              size="large"
              variation="primary"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[1].Flex[1].Button[1]"
              )}
            ></Button>
            <Button
              gap="24px"
              display="flex"
              width="74px"
              shrink="0"
              height="48px"
              size="large"
              variation="primary"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[1].Flex[1].Button[2]"
              )}
            ></Button>
            <Button
              gap="24px"
              display="flex"
              width="75px"
              shrink="0"
              height="48px"
              size="large"
              variation="primary"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[1].Flex[1].Button[3]"
              )}
            ></Button>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="18px"
            textAlign="right"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            textDecoration="underline"
            position="absolute"
            top="3px"
            left="300px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Size Guide"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Text[0]")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Size "
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Text[1]")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
