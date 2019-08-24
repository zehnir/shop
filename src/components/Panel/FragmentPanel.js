import React from 'react';
import Container from '@material-ui/core/Container';

export default function FragmentPanel({children}) {
  return (
    <React.Fragment>
      
      <Container maxWidth="xl" className="archive-product-section">
        {children}
      </Container>
    </React.Fragment>
  );
}
