import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { DataGrid } from '@mui/x-data-grid';
import userStore from '../store/userStore';
import Loading from '../components/Loading';
import UserListControlPanel from '../components/UI/UserListControlPanel';
import ChangeUserModal from '../components/ChangeUserModal';
import DeleteUserConfirm from '../components/DeleteUserConfirm';

function UsersListPage() {
  const {
    getUsersData, usersList, deleteUser, isDataLoad,
  } = userStore;
  const [limitUsersList, setLimitUsersList] = React.useState(10);

  React.useEffect(() => {
    setTimeout(() => {
      getUsersData();
    }, 5000);
  }, [limitUsersList]);

  const limitPagesFn = (count) => {
    setLimitUsersList(count);
  };

  const columnsWidth = 61;

  const columns = [
    { field: 'A1', headerName: 'A1', width: columnsWidth },
    { field: 'A2', headerName: 'A2', width: columnsWidth },
    { field: 'A3', headerName: 'A3', width: columnsWidth },
    { field: 'A4', headerName: 'A4', width: columnsWidth },
    { field: 'B1', headerName: 'B1', width: columnsWidth },
    { field: 'B2', headerName: 'B2', width: columnsWidth },
    { field: 'B3', headerName: 'B3', width: columnsWidth },
    { field: 'B4', headerName: 'B4', width: columnsWidth },
    { field: 'C1', headerName: 'C1', width: columnsWidth },
    { field: 'C2', headerName: 'C2', width: columnsWidth },
    { field: 'C3', headerName: 'C3', width: columnsWidth },
    { field: 'C4', headerName: 'C4', width: columnsWidth },
    { field: 'D1', headerName: 'D1', width: columnsWidth },
    { field: 'D2', headerName: 'D2', width: columnsWidth },
    { field: 'D3', headerName: 'D3', width: columnsWidth },
    { field: 'D4', headerName: 'D4', width: columnsWidth },
    {
      field: 'buttons',
      headerName: 'Actions',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
      renderCell: (user) => (
        <>
          <ChangeUserModal userId={user.id} />
          <DeleteUserConfirm delUser={() => deleteUser(user.id)} />
        </>
      ),
    },
  ];

  const rows = usersList.slice();

  return (
    <div>
      <h2>Список данных</h2>
      {isDataLoad ? (
        <>
          <UserListControlPanel fnLimit={limitPagesFn} />
          <div style={{ width: 1150 }}>
            <DataGrid
              disableColumnMenu
              autoHeight
              rows={rows}
              columns={columns}
              pageSize={limitUsersList}
              rowsPerPageOptions={[limitUsersList]}
              sx={{
                padding: 1,
                boxShadow: 2,
                border: 2,
                borderColor: 'gray',
                '& .MuiDataGrid-cell:hover': {
                  color: '#51c3e1',
                },
              }}
            />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default observer(UsersListPage);
