import styled from 'styled-components';

export const Container = styled.div`
  margin: 1em 0.5em;
  display: flex;

  ${(props) => props.theme.media.lessThan('small')`
    flex-direction: column;
  `}
`;

export const Group = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 1em;
  }

  &:first-child {
    z-index: 11;
  }

  ${(props) => props.theme.media.lessThan('small')`
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  `}
`;

export const Label = styled.label`
  margin-right: 1em;
`;

export const selectCustomStyles = {
  control: (base) => ({
    ...base,

    // the next lines remove the blue outline when focused: https://stackoverflow.com/a/57250211/9787887
    borderColor: '#ddd',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#aaa',
    },
    minHeight: 0, // (1)
  }),

  dropdownIndicator: (base) => ({
    ...base,
    padding: 3, // (2)
  }),

  container: (base) => ({
    ...base,
    width: '10em',
    zIndex: '10',
    '&:selected': {
      zIndex: '11',
    },
  }),

  option: (base) => ({
    ...base,
    padding: '0.1em 0.2em',
  }),

  menuList: (base) => ({
    ...base,
    padding: 2,
  }),
};

// NOTE: To truncate the default padding of <Select/>, need (1) and (2) (Take me days to find out)
