import React, { FC } from "react";
import { DeliveryAdditionsType } from "../../../redux/types/delivery.types";

interface PropsType {
  name: string;
  additions?: Array<DeliveryAdditionsType>;
}

let DeliveryPaymentMethod: FC<PropsType> = ({ name, additions }) => {
  return (
    <ul>
      <li>
        {name}
        <ul>
          {additions?.map((a) => (
            <li key={a._id}>{a.name}</li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default DeliveryPaymentMethod;
