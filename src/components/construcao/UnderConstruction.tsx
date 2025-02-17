// components/UnderConstruction.tsx
'use client';

import { Center, Text, Box } from '@mantine/core';

const UnderConstruction = () => {
  return (
    <Box
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url(/imagens/place/producao.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Center
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '2rem',
          borderRadius: '10px',
        }}
      >
        <Text size="xl" color="white">
          Página em Construção 🚧
        </Text>
      </Center>
    </Box>
  );
};

export default UnderConstruction;
