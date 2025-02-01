import { FeaturesGrid } from "@/components/features/FeaturesGrid";
import { FooterCentered } from "@/components/footer/FooterCentered";
import { HeaderMegaMenu } from "@/components/header/HeaderMegaMenu";
import { UserInfoAction } from "@/components/user/UserInfoAction";
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

        <Container size="lg">
          <FeaturesGrid />

          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
            <UserInfoIcons
              avatarUrl="/imagens/avatar/milena.jpg"
              role="UX Designer"
              name="Milena Duarte"
              email="contato.milenarduarte@gmail.com"
              phone="@oi.mile"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/laura.jpg"
              role="UX Designer"
              name="Laura"
              email="alice@example.com"
              phone="+55 (11) 98765-4321"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/ana.jpg"
              role="UX Designer"
              name="Ana Vitória Mendes"
              email="alice@example.com"
              phone="+55 (11) 98765-4321"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/aline.jpg"
              role="UX Designer"
              name="Aline"
              email="alice@example.com"
              phone="+55 (11) 98765-4321"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/ingrid.jpg"
              role="UX Designer"
              name="Ingrid Ribeiro"
              email="alice@example.com"
              phone="+55 (11) 98765-4321"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/kevilla.jpg"
              role="UX Designer"
              name="Kévilla Aguiar"
              email="alice@example.com"
              phone="+55 (11) 98765-4321"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/kaielly.jpg"
              role="UX Designer"
              name="Kaielly"
              email="alice@example.com"
              phone="+55 (11) 98765-4321"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/cassy.jpg"
              role="UX Designer"
              name="Cassy"
              email="alice@example.com"
              phone="+55 (11) 98765-4321"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/bea.jpg"
              role="UX Designer"
              name="Beatriz Barreto"
              email="alice@example.com"
              phone="+55 (11) 98765-4321"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/marina.jpg"
              role="UX Designer"
              name="Marina"
              email="alice@example.com"
              phone="+55 (11) 98765-4321"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/bruna.jpg"
              role="UX Designer"
              name="Bruna Rocha"
              email="alice@example.com"
              phone="+55 (11) 98765-4321"
            />
            <UserInfoIcons
              avatarUrl="/imagens/avatar/laysa.jpg"
              role="UX Designer"
              name="Laysa Cabedo"
              email="alice@example.com"
              phone="+55 (11) 98765-4321"
            />
            <UserInfoIcons
              avatarUrl=""
              role="UX Designer"
              name="Maria Clara"
              email="alice@example.com"
              phone="+55 (11) 98765-4321"
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
