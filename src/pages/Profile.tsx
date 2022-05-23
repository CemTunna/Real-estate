import { Button, Grid, TextField, Typography } from '@mui/material';

import useUpdate from '@/hooks/useUpdate';
const Profile = () => {
  const {
    handleLogout,
    name,
    email,
    onSubmit,
    onChange,
    changedDetails,
    setChangedDetails,
  } = useUpdate();
  return (
    <Grid>
      <header>
        <Typography>My Profile</Typography>
        <Button onClick={handleLogout} style={{ border: '1px solid red' }}>
          Log out
        </Button>
      </header>
      <main>
        <Grid>
          <Grid>
            <Typography>Personal Details</Typography>
            <Typography
              onClick={() => {
                changedDetails && onSubmit();
                setChangedDetails((prevState: boolean) => !prevState);
              }}
            >
              {changedDetails ? 'done' : 'change'}
            </Typography>
          </Grid>
        </Grid>
        <Grid>
          <form action=''>
            <TextField
              type='text'
              id='name'
              className={!changedDetails ? 'profileName' : 'profileNameActive'}
              disabled={!changedDetails}
              value={name}
              onChange={onChange}
            />
            <TextField
              type='email'
              id='email'
              className={
                !changedDetails ? 'profileEmail' : 'profileEmailActive'
              }
              disabled={!changedDetails}
              value={email}
              onChange={onChange}
            />
          </form>
        </Grid>
      </main>
    </Grid>
  );
};

export default Profile;
