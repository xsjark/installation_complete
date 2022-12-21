import { Box, Link, Typography } from "@mui/material";

interface SupportProps {
    error: number
}

export default function Support({error}: SupportProps) {
    const message = `Hola, tengo el error #${error} con la instalacion de RunFood Service`
    return (
        <Box sx={{ py: 1 }}>
            <Typography variant="subtitle2">
                <strong>Contacta con soporte técnico para ayudarte con esto</strong>
            </Typography>

            <Typography variant="subtitle2">
                Escribenos por Whatsapp (<Link href={`https://web.whatsapp.com/send?phone=59324016128&text=${message}&app_absent=0`} target="_blank" >+593 2 401 6128</Link>)
            </Typography>

            <Typography variant="subtitle2">
                Reporta el problema por correo electrónico (<Link href="mailto:soporte@runfoodapp.co">soporte@runfoodapp.com</Link>)
            </Typography>

            <Typography variant="subtitle2" >
                Llamarnos (<Link href="tel+593 42 618 548">+593 42 618 548</Link>)
            </Typography>
        </Box>
    )
}