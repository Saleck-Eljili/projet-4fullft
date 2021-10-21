import React, { useState } from 'react'
import { Route, useHistory } from "react-router-dom";
import { Kebab as IKebab } from './data/kebabs.data';
import Kebab from './kebab';
import BreadsSelector from './breads-selector';
import FillingsSelector from './fillings-selector';
import MeatsSelector from './meats-selector';
import SaucesSelector from './sauces-selector';

interface Props {
  match: {
    path: string;
    url: string;
  }
  onOrder: (kebab: IKebab) => void;
}

const ConfigKebab = (props: Props) => {
  const history = useHistory();
  const [kebab, setKebab] = useState({
    price: 7.50,
  } as IKebab);

  return (
    <>
      <Route exact path={props.match.url} component={() => <Kebab
        kebab={kebab}
        onOrder={props.onOrder} />} />


      <Route path={`${props.match.url}/etape1`} component={() => <BreadsSelector
        onProceed={(bread) => {
          setKebab({ ...kebab, bread: bread });
          history.push(`${props.match.url}/etape2`);
        }} />} />

      <Route path={`${props.match.url}/etape2`} component={() => <MeatsSelector
        onProceed={(meat) => {
          setKebab({ ...kebab, meat: meat });
          history.push(`${props.match.url}/etape3`);
        }} />} />

      <Route path={`${props.match.url}/etape3`} component={() => <FillingsSelector
        onProceed={(fillings) => {
          setKebab({ ...kebab, fillings: fillings });
          history.push(`${props.match.url}/etape4`);
        }} />} />

      <Route path={`${props.match.url}/etape4`} component={() => <SaucesSelector
        onProceed={(sauces) => {
          setKebab({ ...kebab, sauces: sauces });
          history.push(`${props.match.url}`);
        }} />} />
    </>
  )
}

export default ConfigKebab
