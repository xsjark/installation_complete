import { Box } from "@mui/system";

export default function Logo() {
    return (
        <Box sx={{width: "100%", display: "flex", justifyContent: "center", my: 10}}>
            <img src="./rfalogo.png" width="250px" alt="RunFood App Logo"/>     
        </Box>
    )
}