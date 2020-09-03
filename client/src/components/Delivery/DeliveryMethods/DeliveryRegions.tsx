import React from 'react'
import { DeliveryCitiesType } from '../../../redux/types/delivery.types'

interface Props {
    key: number
    name: string
    cities?: Array<DeliveryCitiesType>
}

export const DeliveryRegions = (props: Props) => {
    return (
        <ul>
            <li>
                {props.name}
                <ul>
                    {props.cities?.map(c =>
                        <li key={c._id}>{c.name}</li>
                    )}
                </ul>
            </li>
        </ul>
    )
}
