import React, { FC } from "react";

interface PropsType {
  name: string;
}

let DeliveryMethod: FC<PropsType> = ({ name }) => {
  return (
    <ul>
      <li>{name}</li>
    </ul>
  );
};

export default DeliveryMethod;
