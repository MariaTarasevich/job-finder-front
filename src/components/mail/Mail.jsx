import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './Mail.css'

export default function Mail() {
  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={[{ field: 'date' }, { field: 'object' }, { field: 'name' }, { field: 'email' }]}
        rows={[
          { internalId: 1, date: '12.01.22', object: 'Job', name: 'John Smith', email: '123@' },
          { internalId: 2, name: 'MUI' },
        ]}
        getRowId={(row) => row.internalId}
      />
    </div>
  );
}
