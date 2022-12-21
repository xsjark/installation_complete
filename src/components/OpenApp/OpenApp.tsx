import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function OpenApp() {
    return (
        <Box sx={{py: 1}}>
            <Typography variant="h6" align="center">RunFood está listo para usarse.</Typography>
            <Typography variant="h6" align="center"><Link>Abre la App</Link></Typography>
        </Box>
    )
}