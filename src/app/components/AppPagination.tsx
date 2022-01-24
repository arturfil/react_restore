import { Box, Pagination, Typography } from '@mui/material'
import { useState } from 'react';
import { MetaData } from '../models/pagination'

interface Props {
  metaData: MetaData;
  onPageChange: (page: number) => void;
}

export default function AppPagination({metaData, onPageChange}: Props) {
  const { currentPage, totalCount, totalPages, pageSize } = metaData;
  const [pageNumber, setPageNumber] = useState(currentPage);  

  function handlePageChange(page: number) {
    setPageNumber(page);
    onPageChange(page);
  }
  
  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>
          Display {(currentPage -1) * pageSize + 1} - 
          {currentPage * pageSize > totalCount
            ? totalCount
            : currentPage * pageSize
          } of {totalCount}
        </Typography>
        <Pagination
          color="secondary"
          size="large"
          count={totalPages}
          page={pageNumber}
          onChange={(e, page) => handlePageChange(page)}
        />
      </Box>
    </div>
  )
}
