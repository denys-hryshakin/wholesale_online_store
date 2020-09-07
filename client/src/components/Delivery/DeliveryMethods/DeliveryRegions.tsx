import React, { FC } from "react";
import { DeliveryCitiesType } from "../../../redux/types/delivery.types";

interface PropsType {
  name: string;
  cities?: Array<DeliveryCitiesType>;
}

let DeliveryRegions: FC<PropsType> = ({ name, cities }) => {
  return (
    <ul>
      <li>
        {name}
        <ul>
          {cities?.map((c) => (
            <li key={c._id}>{c.name}</li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default DeliveryRegions;
