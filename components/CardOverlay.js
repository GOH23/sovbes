import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { Badge, Box, badgeClasses } from "@mui/joy"

export default function OverflowCard({ data }) {
  return (
    <Card variant="outlined" orientation='horizontal' sx={{
      width: '100%',
      '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
    }}>
      <CardOverflow sx={{}}>
        <AspectRatio ratio={1} sx={{ width: 140,height: '100%' }}>
          <img
            src={data.image}
            srcSet={data.image}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-lg">{data.name}</Typography>
        <Box level="body-sm" sx={{ display: 'flex', alignItems: 'center' }}>
          <Badge
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeInset="14%"
            color={data.status == "Alive" ? 'success' : data.status != "unknown" ? "danger" : "neutral"}
            sx={{
              [`& .${badgeClasses.badge}`]: {
                '&::after': {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  animation: 'ripple 1.2s infinite ease-in-out',
                  border: '2px solid',
                  borderColor: data.status == "Alive" ? 'success.500' : data.status != "unknown" ? "danger.500" : "neutral.500",
                  content: '""',
                },
              },
              '@keyframes ripple': {
                '0%': {
                  transform: 'scale(1)',
                  opacity: 1,
                },
                '100%': {
                  transform: 'scale(2)',
                  opacity: 0,
                },
              },
            }}
          />
          <Typography sx={{ marginLeft: '10px' }}>{data.status} - {data.species}</Typography>
        </Box>
        <div>
          <Typography level="body-xs">Last known location:</Typography>
          <Typography level="body-md">{data.location.name}</Typography>
        </div>
        <div>
          <Typography level="body-xs">First seen in:</Typography>
          <Typography level="body-md">{data.name}</Typography>
        </div>
      </CardContent>

    </Card>
  );
}