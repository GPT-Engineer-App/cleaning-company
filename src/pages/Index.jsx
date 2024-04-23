import { Box, Container, Heading, Text, Button, Image, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBroom } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Image src="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHNlcnZpY2V8ZW58MHx8fHwxNzEzODg4NDcyfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
        <Heading as="h1" size="2xl">
          Välkommen till Vår Städföretag!
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Professionell städning för hem och företag. Vi erbjuder högkvalitativa städtjänster som gör ditt liv enklare.
        </Text>
        <HStack spacing={4}>
          <Button leftIcon={<Icon as={FaPhone} />} colorScheme="teal" variant="solid">
            Ring Oss
          </Button>
          <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="teal" variant="outline">
            Skicka E-post
          </Button>
        </HStack>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <VStack spacing={3}>
            <Heading as="h3" size="lg">
              Varför välja oss?
            </Heading>
            <Text>Vårt team av erfarna städare använder de senaste teknikerna och miljövänliga produkter.</Text>
            <Text>Vi garanterar 100% kundnöjdhet och anpassar våra tjänster efter dina unika behov.</Text>
          </VStack>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <VStack spacing={3}>
            <Heading as="h3" size="lg">
              Våra Tjänster
            </Heading>
            <HStack spacing={2} align="start">
              <Icon as={FaBroom} w={8} h={8} />
              <Text flex="1">Fullständig städning av hem och kontor, inklusive dammsugning, torkning och mer.</Text>
            </HStack>
            <HStack spacing={2} align="start">
              <Icon as={FaMapMarkerAlt} w={8} h={8} />
              <Text flex="1">Vi är lokalt baserade och snabbt tillgängliga inom hela stadsområdet.</Text>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
