import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { Formik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import userStore from '../store/userStore';

interface FormProps {
  userId?: number;
  closeFn?: Function;
}

function CreateAndUpdateUser({ userId, closeFn }: FormProps) {
  const navigate = useNavigate();
  const { addUser, changeUser, getUserData } = userStore;
  const [user, setUser] = React.useState({
    A1: '',
    A2: '',
    A3: '',
    A4: '',
    B1: '',
    B2: '',
    B3: '',
    B4: '',
    C1: '',
    C2: '',
    C3: '',
    C4: '',
    D1: '',
    D2: '',
    D3: '',
    D4: '',
  });

  const fetchUser = async () => {
    if (!userId) return;
    const userFn = await getUserData(userId);
    setUser(userFn);
  };

  React.useEffect(() => {
    fetchUser();
  }, []);

  const validation = yup.object().shape({
    A1: yup.string(),
    A2: yup.string(),
    A3: yup.string(),
    A4: yup.string(),
    B1: yup.string(),
    B2: yup.string(),
    B3: yup.string(),
    B4: yup.string(),
    C1: yup.string(),
    C2: yup.string(),
    C3: yup.string(),
    C4: yup.string(),
    D1: yup.string(),
    D2: yup.string(),
    D3: yup.string(),
    D4: yup.string(),
  });

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 5, width: '600px' },
        }}
        noValidate
        autoComplete="off"
      >
        <Formik
          initialValues={user}
          validateOnBlur
          onSubmit={(values) => {
            if (userId) {
              changeUser(userId, values);
              closeFn!();
            } else {
              addUser(values);
            }
            navigate('/userslistpage');
          }}
          validationSchema={validation}
          enableReinitialize
        >
          {({
            values, handleChange, handleBlur, handleSubmit, dirty,
          }) => (
            <div className="add-user-form">
              <TextField
                id="A1"
                label="A1"
                variant="outlined"
                type="text"
                name="A1"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.A1}
              />
              <TextField
                id="A2"
                label="A2"
                variant="outlined"
                type="text"
                name="A2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.A2}
              />
              <TextField
                id="A3"
                label="A3"
                variant="outlined"
                type="text"
                name="A3"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.A3}
              />
              <TextField
                id="A4"
                label="A4"
                variant="outlined"
                type="text"
                name="A4"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.A4}
              />
              <TextField
                id="B1"
                label="B1"
                variant="outlined"
                type="text"
                name="B1"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.B1}
              />
              <TextField
                id="B2"
                label="B2"
                variant="outlined"
                type="text"
                name="B2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.B2}
              />
              <TextField
                id="B3"
                label="B3"
                variant="outlined"
                type="text"
                name="B3"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.B3}
              />
              <TextField
                id="B4"
                label="B4"
                variant="outlined"
                type="text"
                name="B4"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.B4}
              />
              <TextField
                id="C1"
                label="C1"
                variant="outlined"
                type="text"
                name="C1"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.C1}
              />
              <TextField
                id="C2"
                label="C2"
                variant="outlined"
                type="text"
                name="C2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.C2}
              />
              <TextField
                id="C3"
                label="C3"
                variant="outlined"
                type="text"
                name="C3"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.C3}
              />
              <TextField
                id="C4"
                label="C4"
                variant="outlined"
                type="text"
                name="C4"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.C4}
              />
              <TextField
                id="D1"
                label="D1"
                variant="outlined"
                type="text"
                name="D1"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.D1}
              />
              <TextField
                id="D2"
                label="D2"
                variant="outlined"
                type="text"
                name="D2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.D2}
              />
              <TextField
                id="D3"
                label="D3"
                variant="outlined"
                type="text"
                name="D3"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.D3}
              />
              <TextField
                id="D4"
                label="D4"
                variant="outlined"
                type="text"
                name="D4"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.D4}
              />
              <div style={{ gridColumn: '1/5', display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" disabled={!dirty} onClick={() => handleSubmit()} type="submit" style={{ marginTop: 15 }}>
                  {userId ? 'Изменить' : 'Добавить'}
                </Button>
              </div>
            </div>
          )}
        </Formik>
      </Box>
    </div>
  );
}

export default CreateAndUpdateUser;
