import { Card, CardContent, createTheme, Grid, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import Logo from './components/Logo/Logo';
import Bar from './components/Progress/Bar';
import { CssBaseline } from '@mui/material/';
import OpenApp from './components/OpenApp/OpenApp';
import Error from './components/Error/Error';
import Message from './components/Progress/Message';
import Support from './components/Error/Support';
import useInterval from './Hooks/useInterval';
import GetServiceState from './Mocks/ServiceState';

const theme = createTheme({
  palette: {
    background: {
      default: "#0c7e35"
    },
    primary: {
      main: "#0c7e35"
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "Poppins",
      },
    },
  },
})

interface Response {
  error: Error | null,
  running: boolean,
  info_message: string,
  progress?: number,
  creation_attempt_timestamp: any,
  update_attempt_timestamp: any,
  state: "CHECKING" | "UPDATING" | "ERROR" | "INITIALIZED"
}
function App() {

  const [response, setResponse] = useState<any>();
  const [error, setError] = useState<any>();
  const [progress, setProgress] = useState<number>(0)
  

  useInterval(async() => {
    if(progress < 100){
      try {
        const responseObj: any = await GetServiceState();
        setResponse(responseObj);
        console.log(response);
        setProgress(progress + 1);
      } catch (error) {
        setError(error)
      }
      
    }
  }, 10)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        spacing={0}
        // direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh"}}
      >

        <Grid item xs={12} md={8}>
          <Card sx={{px: 5, py: 1, borderRadius: 10, border: "1px solid #497458"}} elevation={10}>
            <CardContent >
              <Logo />
              {(progress === 100 && !error) && <OpenApp />}
              {(progress < 100 && !error) && <Message message={response?.info_message} state={response?.state}/>}
              {error && <Error code={error.error?.code} text={error.error?.message} />}
              <Bar progress={progress} color={error ? "error" : "primary"} />
              {error && <Support />}
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </ThemeProvider>

  );
}

export default App;
