import { Box, Typography } from "@mui/material";

interface ErrorProps {
    code: number | undefined,
    text: string | undefined
}

export default function Error({code, text}: ErrorProps) {
    return (
        <Box sx={{py: 1}}>
            <Typography variant="h6" align="center">{text} Código: {code}</Typography>
        </Box>
    )
}