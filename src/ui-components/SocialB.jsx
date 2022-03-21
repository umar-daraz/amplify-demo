/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
export default function SocialB(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Divider
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Flex.Divider[0]")}
      ></Divider>
      <Flex
        gap="16px"
        direction="row"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          gap="9px"
          direction="row"
          alignItems="flex-start"
          shrink="0"
          height="24px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Icon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="favorite"
            fontSize="24px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Icon[0]")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Danny liked this"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Image
          width="80px"
          height="80px"
          shrink="0"
          position="relative"
          borderRadius="64px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[1].Image[0]")}
        ></Image>
        <Flex
          gap="8px"
          direction="column"
          width="512px"
          grow="1"
          basis="512px"
          height="56px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0]")}
        >
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Flex[0]")}
          >
            <Flex
              gap="16px"
              direction="row"
              alignItems="flex-start"
              shrink="0"
              height="24px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].Flex[0].Flex[0]"
              )}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.01px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Author"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[1].Flex[0].Flex[0].Flex[0].Text[0]"
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
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Timestamp"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[1].Flex[0].Flex[0].Flex[0].Text[1]"
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
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Lorem ipsum"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[1].Flex[0].Flex[0].Flex[0].Text[2]"
                )}
              ></Text>
            </Flex>
            <Flex
              gap="0"
              direction="row"
              width="227px"
              justifyContent="flex-end"
              alignItems="flex-start"
              grow="1"
              basis="227px"
              height="24px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].Flex[0].Flex[1]"
              )}
            >
              <Icon
                width="24px"
                height="24px"
                shrink="0"
                overflow="hidden"
                position="relative"
                padding="0px 0px 0px 0px"
                type="more_horiz"
                fontSize="24px"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[1].Flex[0].Flex[0].Flex[1].Icon[0]"
                )}
              ></Icon>
            </Flex>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
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
            children="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. ”"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Text[0]")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="80px"
        direction="row"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[2]")}
      >
        <Flex
          gap="16px"
          direction="row"
          alignItems="flex-start"
          shrink="0"
          height="24px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[2].Flex[0]")}
        >
          <Icon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="reply"
            fontSize="24px"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[0].Icon[0]")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="99"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[0].Text[0]")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          alignItems="flex-start"
          shrink="0"
          height="24px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[2].Flex[1]")}
        >
          <Icon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="shuffle"
            fontSize="24px"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[1].Icon[0]")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="99"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[1].Text[0]")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          alignItems="flex-start"
          shrink="0"
          height="24px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[2].Flex[2]")}
        >
          <Icon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="favorite_border"
            fontSize="24px"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[2].Icon[0]")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="99"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[2].Text[0]")}
          ></Text>
        </Flex>
        <Icon
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          type="share"
          fontSize="24px"
          {...getOverrideProps(overrides, "Flex.Flex[2].Icon[0]")}
        ></Icon>
      </Flex>
    </Flex>
  );
}
