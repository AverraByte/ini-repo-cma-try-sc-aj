import { Box, Heading, Text, List, ListItem, ListIcon, useColorModeValue } from "@chakra-ui/react"
import { CheckCircleIcon } from "@chakra-ui/icons"

const MinecraftPricing = () => {
  const listIconColor = useColorModeValue("green.500", "green.300")
  const cardBgColor = useColorModeValue("white", "gray.800")
  const cardTextColor = useColorModeValue("gray.700", "gray.200")

  return (
    <Box bg={cardBgColor} color={cardTextColor} borderRadius="md" p={4} boxShadow="md">
      <Heading size="md" mb={2}>
        Minecraft Server Hosting
      </Heading>
      <Text fontSize="sm" mb={4}>
        Get your Minecraft server up and running in minutes with AverraByte. We provide reliable and scalable hosting
        solutions backed by our technical experts.
      </Text>
      <Heading size="sm" mb={2}>
        Key Features:
      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color={listIconColor} />
          Instant Setup
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color={listIconColor} />
          DDoS Protection
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color={listIconColor} />
          24/7 Support
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color={listIconColor} />
          Customizable Server Options
        </ListItem>
      </List>
    </Box>
  )
}

export default MinecraftPricing
