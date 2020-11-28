import React from 'react';
import styled from 'styled-components';

import palette from '../../lib/styles/palette';

const StackItem = ({ stack }) => {
  return (
    <Stack>
      {stack}
    </Stack>
  );
};
const Stack = styled.span`
  border: 1px solid ${palette.gray};
  border-radius: 4px;
  padding: 0.1rem 0.3rem;
  margin: 0 0.2rem 0.2rem 0;
  word-break: break-all;
  background: ${palette.button.bgDarkGray};
  color: ${palette.button.red};
  font-size: 0.8rem;
`;
export default React.memo(StackItem);
