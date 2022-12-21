import { Card, CardContent, createTheme, Grid, ThemeProvider } from '@mui/material';
import { useState } from 'react';
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
  creation_attempt_timestamp: string,
  update_attempt_timestamp: string,
  state: "CHECKING" | "UPDATING" | "ERROR" | "INITIALIZED"
}

function App() {

  const [response, setResponse] = useState<Response>();
  const [error, setError] = useState<any>();
  const [progress, setProgress] = useState<number>(0)
  const [delay, setDelay] = useState<number>(100)

  useInterval(async() => {
    if(progress < 100){
      try {
        const responseObj: any = await GetServiceState(true);
        setResponse(responseObj);
        setProgress(progress + 1);
        console.log(response)
      } catch (error) {
        setError(error)
      }
    }
  }, (response?.state === "INITIALIZED" || error) ? null : delay)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh"}}
      >

        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Card sx={{px: 5, py: 1, borderRadius: 10, border: "1px solid #497458", minHeight: "80vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}  elevation={10}>
            <CardContent sx={{width: "100%"}} >
              <Logo />
              {(response?.state === "INITIALIZED" && !error) && <OpenApp />}
              {(response?.state !== "INITIALIZED" && !error) && <Message message={response?.info_message} state={response?.state}/>}
              {error && <Error code={error.error?.code} text={error.error?.message} />}
              {response?.state !== "INITIALIZED" && <Bar progress={response?.progress} color={error ? "error" : "primary"} />}
              {error && <Support error={error.error?.code}/>}
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </ThemeProvider>

  );
}

export default App;
