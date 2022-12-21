import { Typography } from "@mui/material";

interface ErrorProps {
    code: number | undefined,
    text: string | undefined
}

export default function Error({code, text}: ErrorProps) {
    return (
        <Typography align="center">{text} Código: {code}</Typography>
    )
}