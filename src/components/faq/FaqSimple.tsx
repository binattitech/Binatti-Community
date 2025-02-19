"use client";

import { Accordion, Container, Title } from "@mantine/core";
import classes from "./FaqSimple.module.css";
import { Titles } from "../title/Title";

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

export function FaqSimple() {
  return (
    <Container className={classes.wrapper}>
      <Titles name="Dúvidas Frequentes" />

      <Accordion
        variant="separated"
        transitionDuration={200}
        chevronPosition="right"
      >
        <Accordion.Item
          className={classes.item}
          value="reset-password"
          w="100%"
        >
          <Accordion.Control>How can I reset my password?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item
          className={classes.item}
          value="another-account"
          w="100%"
        >
          <Accordion.Control>
            Can I create more than one account?
          </Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter" w="100%">
          <Accordion.Control>
            How can I subscribe to the monthly newsletter?
          </Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card" w="100%">
          <Accordion.Control>
            Do you store credit card information securely?
          </Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment" w="100%">
          <Accordion.Control>
            What payment systems do you work with?
          </Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
