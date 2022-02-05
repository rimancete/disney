import React from 'react';
import { LoopCircleLoading } from 'react-loadingg';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { theme } from '../../styles/theme';

interface LoadingProps {
  isLoading: boolean;
}

export default function Loading({ isLoading }: LoadingProps) {
  if (!isLoading) return <></>;
  return (
    <Styled.Container>
      <span>
        <LoopCircleLoading size="large" color={theme.colors.secondaryColor} />
      </span>
    </Styled.Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};
Loading.propTypes = {
  isLoading: PropTypes.bool,
};
