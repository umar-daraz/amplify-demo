import { API } from "aws-amplify";
import { useParams } from "react-router-dom";
import { Loader, withAuthenticator } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Flex,
  Image,
  Rating,
  Text,
} from "@aws-amplify/ui-react";
import * as queries from "../graphql/queries";
import AppNavBar from "./AppNavBar";
import { useStore } from "../store";

function AppProductDetail(props) {
  const { ...rest } = props;
  const addToCart = useStore((state) => state.addToCart);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      const {
        data: { getProduct: product },
      } = await API.graphql({
        query: queries.getProduct,
        variables: { id: productId },
      });
      setIsLoading(false);
      setProduct(product);
    };

    fetchProduct();
  }, [productId]);

  return isLoading ? (
    <Loader />
  ) : (
    <Flex direction={"column"}>
      <AppNavBar width={"100vw"} signOut={props.signOut} />
      <Flex
        gap="24px"
        direction="row"
        width="1160px"
        alignItems="flex-start"
        position="relative"
        padding="0px 0px 0px 0px"
        {...rest}
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
        >
          <Image
            alt=""
            height="480px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            src={product?.image_url}
          ></Image>
          <Flex
            gap="32px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
          >
            <Flex
              gap="8px"
              direction="column"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
            >
              <Text
                fontFamily="Inter"
                fontSize="40px"
                fontWeight="700"
                color="rgba(13,26,38,1)"
                lineHeight="48px"
                textAlign="left"
                display="flex"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={product?.name}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                letterSpacing="0.01px"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={product?.description}
              ></Text>
            </Flex>
            <Divider
              shrink="0"
              alignSelf="stretch"
              size="small"
              orientation="horizontal"
            ></Divider>
            <Flex
              gap="8px"
              direction="column"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Highlights"
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                letterSpacing="0.01px"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="    Hand cut and sewn locally&#xA;    Dyed with our proprietary colors&#xA;    Pre-washed & pre-shrunk&#xA;    Ultra-soft 100% cotton"
              ></Text>
            </Flex>
            <Divider
              shrink="0"
              alignSelf="stretch"
              size="small"
              orientation="horizontal"
            ></Divider>
            <Flex
              gap="8px"
              direction="column"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Details"
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                letterSpacing="0.01px"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
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
        ></Divider>
        <Flex
          gap="24px"
          direction="column"
          shrink="0"
          height="345px"
          position="relative"
          padding="0px 0px 0px 0px"
        >
          <Text
            fontFamily="Inter"
            fontSize="40px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="48px"
            textAlign="left"
            display="flex"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${product?.price}$`}
          ></Text>
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            width="238px"
            position="relative"
            padding="0px 0px 0px 0px"
          >
            <Rating
              display="flex"
              shrink="0"
              height="24px"
              size="small"
            ></Rating>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="18px"
              textAlign="left"
              display="flex"
              textDecoration="underline"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="12 reviews"
            ></Text>
          </Flex>
          <Flex
            padding="0px 0px 0px 0px"
            width="371px"
            height="225px"
            shrink="0"
            position="relative"
          >
            <Button
              position="absolute"
              padding="8px 16px 8px 16px"
              display="flex"
              top="189px"
              left="0px"
              width="371px"
              size="small"
              variation="primary"
              onClick={() => {
                addToCart(product);
              }}
            >
              Add To Bag
            </Button>
            <Flex
              gap="24px"
              position="absolute"
              top="40px"
              left="0px"
              direction="row"
              alignItems="flex-start"
              padding="0px 0px 0px 0px"
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
              >
                XXS
              </Button>
              <Button
                display="flex"
                width="75px"
                shrink="0"
                height="48px"
                size="large"
                variation="primary"
              >
                XS
              </Button>
              <Button
                display="flex"
                width="74px"
                shrink="0"
                height="48px"
                size="large"
                variation="primary"
              >
                S
              </Button>
              <Button
                display="flex"
                width="75px"
                shrink="0"
                height="48px"
                size="large"
                variation="primary"
              >
                M
              </Button>
            </Flex>
            <Flex
              gap="24px"
              position="absolute"
              top="112px"
              left="0px"
              direction="row"
              alignItems="flex-start"
              padding="0px 0px 0px 0px"
            >
              <Button
                gap="24px"
                display="flex"
                width="75px"
                shrink="0"
                height="48px"
                size="large"
                variation="primary"
              >
                L
              </Button>
              <Button
                gap="24px"
                display="flex"
                width="75px"
                shrink="0"
                height="48px"
                size="large"
                variation="primary"
              >
                XL
              </Button>
              <Button
                gap="24px"
                display="flex"
                width="74px"
                shrink="0"
                height="48px"
                size="large"
                variation="primary"
              >
                2XL
              </Button>
              <Button
                gap="24px"
                display="flex"
                width="75px"
                shrink="0"
                height="48px"
                size="large"
                variation="primary"
              >
                3XL{" "}
              </Button>
            </Flex>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="18px"
              textAlign="right"
              display="flex"
              textDecoration="underline"
              position="absolute"
              top="3px"
              left="300px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Size Guide"
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              letterSpacing="0.01px"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Size "
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default withAuthenticator(AppProductDetail);
