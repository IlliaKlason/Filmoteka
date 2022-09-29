import React from 'react';
import PropTypes from 'prop-types';
import { PaginationStyled } from './Pagination.styled';

function PaginationPage({ count, onChange, page }) {
  return (
    <PaginationStyled
      sx={{ display: 'flex', justifyContent: 'center' }}
      count={count}
      onChange={onChange}
      page={Number(page)}
      showFirstButton
      showLastButton
      size="large"
      boundaryCount={0}
    />
  );
}
PaginationPage.propTypes = {
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};
export default PaginationPage;
