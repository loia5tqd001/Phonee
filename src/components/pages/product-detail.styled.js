import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.section`
  max-width: 120rem;
  margin: auto;
`;

export const ProductDetails = styled.div`
  display: flex;

  ${(props) => props.theme.media.lessThan('smedium')`
    flex-direction: column;
  `}
`;

export const ProductImage = styled.div`
  ${(props) => props.theme.mixins.imageFrame}
  max-width: 60rem;
  align-self: flex-start;
  flex: 1;

  ${(props) => props.theme.media.lessThan('regular')`
    flex: 0.8;
  `}

  ${(props) => props.theme.media.lessThan('smedium')`
    max-width: 45rem;
  `}
`;

export const ProductName = styled.h1`
  text-align: left;
  font-size: 2em;
  font-weight: ${(props) => props.theme.fw.normal};
  border-bottom: 1px solid ${(props) => props.theme.colors.greyLight3};
  padding: 0.5rem 8%;
  ${(props) => props.theme.media.greaterThan('small')`
  `}
`;

export const ProductInfo = styled.div`
  margin-left: 1em;
  flex: 1;
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.media.between('smedium', 'medium')`
    font-size: 0.9em;
    margin-left: 0;
    margin-right: 0.5em;
  `}

  ${(props) => props.theme.media.lessThan('smedium')`
    padding: 3em;
    margin-left: 0;
  `}
`;

export const SpecHeading = styled.h2`
  text-align: left;
  margin: 1em 0 0.5em;
  font-size: 1.5em;

  ${(props) => props.theme.media.lessThan('medium')`
    margin: 0.3em 0 0.2em;
  `}
`;

export const SpecList = styled.ul`
  margin-bottom: 1em;
`;

export const SpecItem = styled.li`
  border-top: 1px solid ${(props) => props.theme.colors.greyLight1};
  padding: 0.5em 0 0.75em;

  ${(props) => props.theme.media.lessThan('smedium')`
    padding: 0.4em 0 0.6em;
  `}
`;

export const SpecName = styled.span`
  color: ${(props) => props.theme.colors.greyDark2};
  display: inline-block;
  width: 13em;

  ${(props) => props.theme.media.lessThan('smedium')`
    width: 10em;
  `}
`;

export const PriceWrapper = styled.p`
  text-align: left;
  font-size: 2em;
`;

export const Price = styled.span`
  font-weight: ${(props) => props.theme.fw.semiBold};
  color: ${(props) => props.theme.colors.red};
  margin-right: 1em;
`;

export const CrossPrice = styled.span`
  text-decoration: line-through;
  color: ${(props) => props.theme.colors.greyLight2};
`;

export const BuyButton = styled(Link)`
  display: block;
  max-width: 50rem;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  padding: 1em;
  margin-top: auto;
  border-radius: 0.4rem;
  background: ${(props) => `
    linear-gradient(to bottom, 
      ${props.theme.colors.orange1}, 
      ${props.theme.colors.orange2})`};
`;
