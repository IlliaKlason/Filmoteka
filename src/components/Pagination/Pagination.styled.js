import styled from 'styled-components';
import { Pagination } from '@mui/material';

export const PaginationStyled = styled(Pagination)`
  color: #ffd700;

  .MuiPaginationItem-page.Mui-selected {
    background-color: #ffd700;
    box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 1);
    color: #0057b8;
    font-weight: 600;
  }
  .MuiPaginationItem-page.Mui-selected:hover {
    background-color: #0057b8;
    color: #ffd700;
  }
  &.MuiButtonBase-root {
    background-color: #ffd700;
  }
  &.MuiPagination-ul {
    color: #ffd700;
  }
  [aria-label='Go to first page'],
  [aria-label='Go to previous page'],
  [aria-label='Go to next page'],
  [aria-label='Go to last page'] {
    background-color: #0057b8;
  }

  [aria-label='Go to first page']:hover,
  [aria-label='Go to previous page']:hover,
  [aria-label='Go to next page']:hover,
  [aria-label='Go to last page']:hover {
    background-color: #ffd700;
  }
  .MuiPagination-ul {
    justify-content: center;
  }
`;
