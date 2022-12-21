import { Box, LinearProgress, Typography } from "@mui/material";

interface BarProps {
    progress: number,
    color: "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined
}

export default function Bar({progress, color}: BarProps) {
    return (
        <Box sx={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" , py:3}}>
            <LinearProgress variant="determinate" value={progress}  color={color} sx={{width: "94%"}}/>
            <Typography>{progress}%</Typography>
        </Box>
    )
}