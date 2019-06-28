import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

const BaseWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

BaseWrapper.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: Proptypes.object.isRequired,
};

const Wrapper = styled.div``;

export default BaseWrapper;
