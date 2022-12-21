import { Card, CardContent, createTheme, Grid, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import Logo from './components/Logo/Logo';
import Bar from './components/Progress/Bar';
import { CssBaseline } from '@mui/material/';
import OpenApp from './components/OpenApp/OpenApp';
import Error from './components/Error/Error';
import Message from './components/Progress/Message';
import Support from './components/Error/Support';
import getprogress from './mock_api';
import useInterval from './Hooks/useInterval';


const theme = createTheme({
  palette: {
    background: {
      default: "#0C431F"
    },
    primary: {
      main: "#0C431F"
    }
  },
  typography: {
    fontFamily: "Poppins"
  }
})

function App() {

  const [items, setItems] = useState<any>();
  const [errorText, setErrorText] = useState<string>();
  const [errorCode, setErrorCode] = useState<number>();
  const [progress, setProgress] = useState<number>(0)
  

  const getApi = async (id: number) => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (res.ok) return res.json();
        else {
          setErrorText(res.statusText);
          setErrorCode(res.status)
        };
      })
      .then(data => {
        setItems(data)
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  useInterval(async() => {
    if(progress < 100){
      // console.log(await getprogress(progress))
      getApi(progress)
      setProgress(progress + 1);
      
    }
    }, 100)

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

        <Grid item xs={12} md={6}>
          <Card sx={{px: 5, py: 1}}>
            <CardContent >
              <Logo />
              {/* {JSON.stringify(items)} */}
              {(progress === 100 && !errorText) && <OpenApp />}
              {(progress < 100 && !errorText) && <Message />}
              {errorText && <Error code={errorCode} text={errorText} />}
              <Bar progress={progress} color={errorText ? "error" : "primary"} />
              {errorText && <Support />}
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </ThemeProvider>

  );
}

export default App;
