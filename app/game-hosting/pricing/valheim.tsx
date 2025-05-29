import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material"

const ValheimPricing = () => {
  return (
    <Container maxWidth="lg">
      <Box py={5}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Valheim Server Hosting Pricing
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary">
          High-performance Valheim server hosting with 24/7 support from our technical experts.
        </Typography>

        <Grid container spacing={3} mt={4}>
          {/* Example Pricing Tier 1 */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" align="center" gutterBottom>
                  Tier 1
                </Typography>
                <Typography variant="h5" align="center">
                  $10/month
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary">
                  Up to 10 players
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary">
                  2 GB RAM
                </Typography>
                {/* Add more features here */}
              </CardContent>
            </Card>
          </Grid>

          {/* Example Pricing Tier 2 */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" align="center" gutterBottom>
                  Tier 2
                </Typography>
                <Typography variant="h5" align="center">
                  $20/month
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary">
                  Up to 20 players
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary">
                  4 GB RAM
                </Typography>
                {/* Add more features here */}
              </CardContent>
            </Card>
          </Grid>

          {/* Example Pricing Tier 3 */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" align="center" gutterBottom>
                  Tier 3
                </Typography>
                <Typography variant="h5" align="center">
                  $30/month
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary">
                  Up to 30 players
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary">
                  6 GB RAM
                </Typography>
                {/* Add more features here */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default ValheimPricing
