import React from 'react';
import { Card } from 'react-bootstrap';
import FlexContainer from '../components/FlexContainer';
import CarProfile from '../components/CarProfile';

const Item = ({ car }) => (
  <Card style={{ width: '18rem' }} className="border mb-3 p-3">
    <CarProfile car={car} />
  </Card>
);

const Lab3 = () => (
  <div>
    <h1>Laboratorium 3</h1>
    <FlexContainer element={Item} /> {}
  </div>
);

export default Lab3;