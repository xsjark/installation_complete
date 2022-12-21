import { Box, Typography } from "@mui/material";

interface ErrorProps {
    code: number | undefined,
    message: string | undefined
}

export default function Error({code, message}: ErrorProps) {
    return (
        <Box sx={{py: 1}}>
            <Typography align="center">{message} Código: {code}</Typography>
        </Box>
    )
}