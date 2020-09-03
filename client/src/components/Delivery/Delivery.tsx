import { Accordion, AccordionDetails, AccordionSummary, List } from '@material-ui/core';
import { ExpandMore, InfoOutlined } from '@material-ui/icons';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { getDelivery } from '../../redux/reducers/delivery-reducer';
import { getDeliveryMethodState, getDeliveryPaymentMethodState, getDeliveryRegionsState } from '../../redux/selectors/delivery-selectors';
import { AppStateType } from '../../redux/store';
import { DeliveryMethodType, DeliveryPaymentMethodType, DeliveryRegionsType } from '../../redux/types/delivery.types';
import styles from './Delivery.module.css';
import { DeliveryMethod } from './DeliveryMethods/DeliveryMethod';
import { DeliveryPaymentMethod } from './DeliveryMethods/DeliveryPaymentMethod';
import { DeliveryRegions } from './DeliveryMethods/DeliveryRegions';

type MapStatePropsType = {
    deliveryMethod: Array<DeliveryMethodType>
    deliveryPaymentMethod: Array<DeliveryPaymentMethodType>
    deliveryRegions: Array<DeliveryRegionsType>
}

type MapDispatchPropsType = {
    getDelivery: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

const Delivery: FC<PropsType> = (props) => {
    let deliveryMethodElements = props.deliveryMethod.map(dm => <DeliveryMethod key={dm._id} name={dm.name} />)
    let deliveryPaymentMethodElements = props.deliveryPaymentMethod.map(
        dpm => <DeliveryPaymentMethod key={dpm._id} name={dpm.name} additions={dpm.additions} />)
    let deliveryRegionsElements = props.deliveryRegions.map(
        dr => <DeliveryRegions key={dr._id} name={dr.name} cities={dr.cities} />)

    useEffect(() => {
        function getData() {
            props.getDelivery()
        }
        getData();
        // eslint-disable-next-line
    }, []);

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <h1>Условия доставки и оплаты</h1>
                <InfoOutlined className={styles.icon} />
            </div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <CheckCircleOutlineIcon />
                    <h3>Способы доставки</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        {deliveryMethodElements}
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <CheckCircleOutlineIcon />
                    <h3>Cпособы оплаты</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        {deliveryPaymentMethodElements}
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <CheckCircleOutlineIcon />
                    <h3>Регионы доставки</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        {deliveryRegionsElements}
                    </List>
                </AccordionDetails>
            </Accordion>
        </div>

    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        deliveryMethod: getDeliveryMethodState(state),
        deliveryPaymentMethod: getDeliveryPaymentMethodState(state),
        deliveryRegions: getDeliveryRegionsState(state),
    }
}

export default connect<MapStatePropsType,
    MapDispatchPropsType, {},
    AppStateType>
    (mapStateToProps,
        { getDelivery })
    (Delivery)

