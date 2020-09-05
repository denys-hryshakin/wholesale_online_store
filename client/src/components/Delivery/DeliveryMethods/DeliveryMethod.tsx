import React from "react";

interface Props {
  key: number;
  name: string;
}

export const DeliveryMethod = (props: Props) => {
  return (
    <ul>
      <li>{props.name}</li>
    </ul>
  );
};
