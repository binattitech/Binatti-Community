'use client'

import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

export function CStep() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step label="Informações Pessoais" description="Quem é você?">
          Step 1 content: 
        </Stepper.Step>
        <Stepper.Step label="Sobre Você" description="Conte-nos sobre você.">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Disponibilidade" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Step label="Contribuição" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Step label="Declaração" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}