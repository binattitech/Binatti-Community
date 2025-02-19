"use client";

import { ImageActionBanner } from "@/components/banner/ImageActionBanner";
import { FeaturesCards } from "@/components/features/FeaturesCards";
import { FooterCentered } from "@/components/footer/FooterCentered";
import { HeaderMegaMenu } from "@/components/header/HeaderMegaMenu";
import { Equipe } from "@/components/sessoes/Equipe";
import { Container, Image, Stack } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import { GraduationCap, Clover } from "lucide-react";

export default function Sobre() {
  const features = [
    {
      title: "Educação Acessível",
      description:
        "Criamos conteúdos educativos gratuitos sobre Inteligência Artificial, Cibersegurança e Experiência do Usuário (UX) para que qualquer pessoa possa aprender e se desenvolver na área.",
      icon: <GraduationCap size={32} strokeWidth={2} color="#552cb7" />,
    },
    {
      title: "Mais Mulheres na Tecnologia",
      description:
        "Construímos um espaço onde mulheres podem se apoiar, compartilhar conhecimento e contribuir voluntariamente, incentivando a representatividade e diversidade no setor.",
      icon: <IconUser size={32} strokeWidth={2} color="#552cb7" />,
    },
    {
      title: "Oportunidades de Crescimento",
      description:
        "Através do nosso blog, fórum e mini cursos com certificado, buscamos capacitar e conectar pessoas interessadas no mundo da tecnologia.",
      icon: <Clover size={32} strokeWidth={2} color="#552cb7" />,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <header>
        <HeaderMegaMenu />
      </header>

      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Image
          src="/imagens/equipe.jpg"
          width="100%"
          height="auto"
          style={{ objectFit: "cover" }}
          alt="Imagem da equipe"
          mb="xl"
        />

        <Container size="90vw" style={{ flexGrow: 1 }}>
          <Stack gap="12vh">
            <FeaturesCards 
              title="O que é a Binatti Community?"
              description="Tudo começou com a iniciativa das meninas do curso de Engenharia de Software do iCEV, que, com o apoio da coordenação da faculdade, decidiram se unir para se apoiar e crescer juntas na área de tecnologia. A partir dessa união, surgiu a ideia de propagar educação gratuita e acessível, incentivando mais mulheres a explorarem o universo da inovação. Somos uma comunidade aberta, onde mulheres podem participar e contribuir voluntariamente, compartilhando conhecimento e inspirando outras pessoas. Criamos conteúdos de mulheres para todos, acreditando que a tecnologia deve ser acessível e inclusiva para qualquer pessoa interessada em aprender. Atuamos em três áreas principais: Inteligência Artificial, Cibersegurança e Experiência do Usuário (UX). Acreditamos que o acesso à informação e o aprendizado colaborativo são essenciais para transformar o mercado de tecnologia. Nosso site oferece conteúdos educativos por meio de um blog com artigos informativos, um fórum aberto para dúvidas e discussões e uma área de mini cursos gratuitos com certificado, para quem deseja aprender e se especializar."
              features={features}
            />
            <Equipe />
            <ImageActionBanner />
          </Stack>
        </Container>
      </main>

      <footer style={{ marginTop: "auto" }}>
        <FooterCentered />
      </footer>
    </div>
  );
}
