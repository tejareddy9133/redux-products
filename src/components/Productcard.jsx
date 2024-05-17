import React from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardHeader,
  Image,
  Stack,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
const Productcard = ({ description, price, thumbnail, title, id }) => {
  return (
    <div>
      <Card maxW="sm" h={"auto"}>
        <CardBody>
          <Image
            src={thumbnail}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
            <Text color="blue.600" fontSize="2xl">
              {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
            <Button variant="ghost" colorScheme="blue">
              <NavLink to={`/products/${id}`}>View</NavLink>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Productcard;
