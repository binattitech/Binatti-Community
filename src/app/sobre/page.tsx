import { FeaturesCards } from "@/components/features/FeaturesCards";
import { FooterCentered } from "@/components/footer/FooterCentered";
import { HeaderMegaMenu } from "@/components/header/HeaderMegaMenu";
import { UserInfoIcons } from "@/components/user/UserInfoIcons";
import { Container, Image, SimpleGrid } from "@mantine/core";

export default function Sobre() {
  return (
    <div>
      <header>
        <HeaderMegaMenu />
      </header>
      <main>
        <Image
          src="/imagens/equipe.jpg"
          width="100%"
          height="auto"
          style={{ objectFit: "cover" }}
          alt="Imagem da equipe"
        />

        <Container size='lg'>
          <FeaturesCards />

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}  spacing="xl" verticalSpacing="xl">
            <UserInfoIcons
              avatarUrl="/imagens/avatar/milena.jpg"
              role="UX Designer"
              name="Milena Duarte"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/laura.jpg"
              role="UX Designer"
              name="Laura"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/ana.jpg"
              role="UX Designer"
              name="Vitória Mendes"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/aline.jpg"
              role="UX Designer"
              name="Aline"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/ingrid.jpg"
              role="UX Designer"
              name="Ingrid Ribeiro"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/kevilla.jpg"
              role="UX Designer"
              name="Kévilla Aguiar"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/kaielly.jpg"
              role="UX Designer"
              name="Kaielly"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/cassy.jpg"
              role="UX Designer"
              name="Cassy"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/bea.jpg"
              role="UX Designer"
              name="Beatriz Barreto"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/marina.jpg"
              role="UX Designer"
              name="Marina"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/bruna.jpg"
              role="UX Designer"
              name="Bruna Rocha"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/laysa.jpg"
              role="UX Designer"
              name="Laysa Cabedo"
            />
            <UserInfoIcons
              avatarUrl=""
              role="UX Designer"
              name="Maria Clara"
            />
          </SimpleGrid>
        </Container>
      </main>
      <footer>
        <FooterCentered />
      </footer>
    </div>
  );
}
