import { Box, Link, Typography } from "@mui/material";

export default function Support() {
    return (
        <Box sx={{ py: 1 }}>
            <Typography>
                Contacta con soporte técnico para ayudarte con esto
            </Typography>

            <Typography>
                Escribenos por Whatsapp (<Link href="https://web.whatsapp.com/send?phone=59324016128" target="_blank" >+593 2 401 6128</Link>)
            </Typography>
            <Typography>
                Reporta el problema por correo electrónico (<Link href="mailto:soporte@runfoodapp.co">soporte@runfoodapp.com</Link>)
            </Typography>

            <Typography>
                Llamarnos (+593 42 618 548)
            </Typography>
        </Box>
    )
}