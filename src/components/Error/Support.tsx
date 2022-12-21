import { Box, Link, Typography } from "@mui/material";

export default function Support() {
    return (
        <Box sx={{ py: 1 }}>
            <Typography variant="subtitle2">
                <strong>Contacta con soporte técnico para ayudarte con esto</strong>
            </Typography>

            <Typography variant="subtitle2">
                Escribenos por Whatsapp (<Link href="https://web.whatsapp.com/send?phone=59324016128" target="_blank" >+593 2 401 6128</Link>)
            </Typography>
            
            <Typography variant="subtitle2">
                Reporta el problema por correo electrónico (<Link href="mailto:soporte@runfoodapp.co">soporte@runfoodapp.com</Link>)
            </Typography>

            <Typography variant="subtitle2">
                Llamarnos (+593 42 618 548)
            </Typography>
        </Box>
    )
}