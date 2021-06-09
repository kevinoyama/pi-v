import React from 'react';

import { TitleView } from './styles';

const Title: React.FC = ({ children }) => {
  return (
    <TitleView>
      <h1>{children}</h1>
    </TitleView>
  );
};

export default Title;
