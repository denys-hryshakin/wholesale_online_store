import React from "react";
import { DeliveryAdditionsType } from "../../../redux/types/delivery.types";

interface Props {
  key: number;
  name: string;
  additions?: Array<DeliveryAdditionsType>;
}

export const DeliveryPaymentMethod = (props: Props) => {
  return (
    <ul>
      <li>
        {props.name}
        <ul>
          {props.additions?.map((a) => (
            <li key={a._id}>{a.name}</li>
          ))}
        </ul>
      </li>
    </ul>
  );
};
