import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'

import './Mail.css'

export const Mail: React.FC = () => {
  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={[{ field: 'date' }, { field: 'object' }, { field: 'name' }, { field: 'email' }]}
        rows={[
          { internalId: 1, date: '17.01.22', object: 'Job', name: 'John Smith', email: '123@yahoo.com' },
          { internalId: 2, date: '17.01.22', object: 'Resume', name: 'Martha Johnes', email: '456@gmail.com' }
        ]}
        getRowId={(row) => row.internalId}
      />
    </div>
  )
}

export default Mail
