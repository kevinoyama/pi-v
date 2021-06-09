import React from 'react';

import { HeaderView, HeaderContent } from './styles';

const header: React.FC = ({ children }) => {
  return (
    <HeaderView>
      <HeaderContent>{children}</HeaderContent>
    </HeaderView>
  );
};

export default header;
