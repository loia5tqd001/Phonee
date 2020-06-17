// reference from: https://github.com/ZhangMYihua/lesson-28/blob/1f3e531fc82d6ea8d8379a1db47875dcf688e1e2/src/components/with-spinner/with-spinner.component.jsx
import React from 'react';
import Loader from 'react-loader-spinner';

import { SpinnerContainer } from './with-spinner.styled';

const WithSpinner = (WrappedComponent, height) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerContainer>
        {height && <Loader type="Oval" color="#67c1d9" height={height} />}
      </SpinnerContainer>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
