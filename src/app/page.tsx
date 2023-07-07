"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Card,
  Button,
  CardBody,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <main className={styles.main}>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="gray.300" />
            </InputLeftElement>
            <Input placeholder="Email" />
          </InputGroup>
          <Button colorScheme="blue">Button</Button>
        </CardBody>
      </Card>
    </main>
  );
}
