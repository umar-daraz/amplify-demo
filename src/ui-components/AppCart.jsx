import { useMemo } from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  SelectField,
  Text,
  IconShoppingBag,
} from "@aws-amplify/ui-react";

import { useStore } from "../store";

export const AppCart = () => {
  const cart = useStore((state) => state.cart);
  const total = useMemo(
    () =>
      cart.reduce((acc, currentItem) => {
        return acc + currentItem.price * currentItem.quantity;
      }, 0),
    [cart]
  );

  const taxes = 7;
  const shipping = 3.0;
  return (
    <Flex
      gap="10px"
      direction="column"
      alignItems="flex-start"
      shrink="0"
      height="934px"
      position="relative"
      padding="32px 0px 32px 0px"
      backgroundColor="rgba(255,255,255,1)"
    >
      <Badge
        backgroundColor="rgba(214,245,219,1)"
        display="flex"
        width="405px"
        justifyContent="center"
        size="default"
        variation="success"
      >
        {" "}
        Discount - 10% off
      </Badge>

      <Divider size="small" orientation="horizontal" />
      <Flex
        padding="0px 0px 0px 0px"
        width="405px"
        height="24px"
        justifyContent={"space-between"}
      >
        <Flex alignItems={"center"} alignSelf="center">
          <IconShoppingBag
            overflow="hidden"
            padding="0px 0px 0px 0px"
            type="shopping_bag"
          ></IconShoppingBag>
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
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Cart (2)"
          >
            {` Cart (${cart.length})`}
          </Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="right"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
        >
          {`$${total}`}
        </Text>
      </Flex>
      <Divider size="small" orientation="horizontal" />
      <Flex
        padding="0px 0px 0px 0px"
        direction="column"
        width="469px"
        height="870px"
        shrink="0"
        position="relative"
      >
        {cart.map((cartItem) => {
          return (
            <>
              <CartItem cartItem={cartItem} />
              <Divider size="small" orientation="horizontal"></Divider>
            </>
          );
        })}
        <Flex width="405px" height="24px" justifyContent={"space-between"}>
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
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Subtotal"
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="right"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
          >{`$${cart.reduce((acc, currentItem) => {
            return acc + currentItem.price;
          }, 0)}`}</Text>
        </Flex>
        <Flex width="405px" height="24px" justifyContent={"space-between"}>
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
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Shipping"
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="right"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
          >{`$${shipping}`}</Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="405px"
          height="24px"
          justifyContent={"space-between"}
        >
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
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Taxes"
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="right"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
          >{`$${taxes}`}</Text>
        </Flex>
        <Divider size="small" orientation="horizontal"></Divider>
        <Flex padding="0px 0px 0px 0px" width="405px" height="20px">
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.49px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Total"
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="right"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.49px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
          >{`$${total + shipping + taxes}`}</Text>
        </Flex>
        <Divider size="small" orientation="horizontal"></Divider>
        <Button display="flex" width="100%" size="large" variation="primary">
          {" "}
          Order{" "}
        </Button>
      </Flex>
    </Flex>
  );
};

function CartItem({ cartItem }) {
  return (
    <Flex width="405px" height="134px" direction="row">
      <Image height="97.01%" width="21.98%" src={cartItem.image_url}></Image>
      <Flex direction="column" width={"100%"}>
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
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={cartItem.name}
        ></Text>
        <Icon overflow="hidden" padding="0px 0px 0px 0px" type="delete"></Icon>
        <Flex justifyContent={"space-between"} width="100%">
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.49px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Order Summary"
          ></Text>
          <SelectField
            width="64px"
            display="flex"
            size="small"
            labelHidden={true}
            variation="default"
          ></SelectField>
        </Flex>
      </Flex>
    </Flex>
  );
}
