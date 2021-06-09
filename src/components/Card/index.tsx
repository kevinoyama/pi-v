import React from 'react';

import { CardView, CardContent } from './styles';

const Card: React.FC = ({ children }) => {
  return (
    <CardView>
      <CardContent>{children}</CardContent>
    </CardView>
  );
};

export default Card;
