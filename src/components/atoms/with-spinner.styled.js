import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  ${(props) => props.theme.mixins.flexCenter}
  grid-column: 1/-1;
`;
