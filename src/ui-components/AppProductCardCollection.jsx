/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CardB from "./CardB";
import { Collection } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { Product } from "../models";
export default function ProductCardCollection(props) {
   const navigate  = useNavigate();
  const { items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Product,
        }).items;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <CardB
          product={item}
          height="auto"
          width="auto"
          margin="0 20px 20px 0"
          key={item.id}
          {...getOverrideProps(overrides, "Collection.CardB[0]")}
          onClick={() => {
              navigate(`/product/${item.id}`);
              console.log(" Click on Card .... ");
          }}
        ></CardB>
      )}
    </Collection>
  );
}
