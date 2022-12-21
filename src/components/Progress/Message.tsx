import { Box, Typography } from "@mui/material";

interface MessageProps {
    message: string;
    state: string;
}

export default function Message({message, state}: MessageProps) {
    return (
        <Box sx={{py: 1}}>
            <Typography variant="h6" align="center">{message}</Typography>
            <Typography variant="h6" align="center">{state}</Typography>
        </Box>
    )
}