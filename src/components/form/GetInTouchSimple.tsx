"use client";

import {
  Button,
  Checkbox,
  Container,
  Divider,
  Group,
  Radio,
  SimpleGrid,
  Stack,
  Textarea,
  TextInput,
  Title,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./GetInTouchSimple.module.css";

export function GetInTouchSimple() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      age: "",
      location: "",
      occupation: "",
      occupationOther: "",
      about: "",
      availability: "",
      participation: "",
      onlineMeetings: "",
      contributionAreas: [],
      skills: "",
      tools: "",
      willingToLearn: "",
      specificProject: "",
      pastExperience: "",
      commitment: "",
    },
  });

  return (
    <Container size="lg">
      {" "}
      <form onSubmit={form.onSubmit(() => {})}>
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Seja uma Voluntária
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Preencha o formulário abaixo para se juntar à nossa comunidade!
        </Text>

        <Divider my="xl" />

        <Title order={3} className={classes.subtitle} ta="left" mt="xl">
          Informações Pessoais
        </Title>

        <TextInput
          label="Nome Completo"
          placeholder="Seu nome"
          {...form.getInputProps("name")}
        />
        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="md">
          <TextInput
            label="Email"
            placeholder="Seu email"
            {...form.getInputProps("email")}
          />
          <TextInput
            label="Telefone"
            placeholder="Seu telefone"
            {...form.getInputProps("phone")}
          />
        </SimpleGrid>
        <TextInput
          label="Idade"
          placeholder="Sua idade"
          mt="md"
          {...form.getInputProps("age")}
        />
        <TextInput
          label="Localidade (Cidade/Estado)"
          placeholder="De onde você é?"
          mt="md"
          {...form.getInputProps("location")}
        />

        <Divider my="xl" />

        <Title order={3} className={classes.subtitle} ta="left" mt="xl">
          Sobre Você
        </Title>
        <Radio.Group
          label="Qual é a sua ocupação atual?"
          {...form.getInputProps("occupation")}
        >
          <Stack>
            <Radio value="estudante" label="Estudante" />
            <Radio
              value="tecnologia"
              label="Profissional na área de tecnologia"
            />
            <Radio value="outraArea" label="Profissional de outra área" />
            <Radio value="outra" label="Outra:" />
            <TextInput
              placeholder="Especifique"
              {...form.getInputProps("occupationOther")}
            />
          </Stack>
        </Radio.Group>

        <Textarea
          label="Conte-nos um pouco sobre você e por que deseja se voluntariar:"
          placeholder="Escreva aqui"
          mt="md"
          {...form.getInputProps("about")}
        />

        <Divider my="xl" />

        <Title order={3} className={classes.subtitle} ta="left" mt="xl">
          Disponibilidade
        </Title>
        <Radio.Group
          label="Quantas horas por semana você pode se dedicar?"
          {...form.getInputProps("availability")}
        >
          <Stack>
            <Radio value="1-3" label="1-3 horas" />
            <Radio value="4-6" label="4-6 horas" />
            <Radio value="7-10" label="7-10 horas" />
            <Radio value="mais10" label="Mais de 10 horas" />
          </Stack>
        </Radio.Group>

        <Radio.Group
          label="Você prefere atuar em:"
          {...form.getInputProps("participation")}
        >
          <Stack>
            <Radio
              value="pontual"
              label="Atividades pontuais (eventos ou projetos específicos)"
            />
            <Radio
              value="continua"
              label="Colaboração contínua (tarefas regulares, longo prazo)"
            />
            <Radio value="ambas" label="Ambas" />
          </Stack>
        </Radio.Group>

        <Radio.Group
          label="Está disponível para reuniões ou eventos online?"
          {...form.getInputProps("onlineMeetings")}
        >
          <Stack>
            <Radio value="sim" label="Sim" />
            <Radio value="nao" label="Não" />
          </Stack>
        </Radio.Group>

        <Divider my="xl" />

        <Title order={3} className={classes.subtitle} ta="left" mt="xl">
          Como Deseja Contribuir?
        </Title>
        <Checkbox.Group
          label="Áreas de interesse"
          {...form.getInputProps("contributionAreas")}
        >
          <Stack>
            <Checkbox
              value="conteudo"
              label="Produção de Conteúdo (artigos, redes sociais)"
            />
            <Checkbox value="tecnologia" label="Desenvolvimento e Tecnologia" />
            <Checkbox value="eventos" label="Organização de Eventos" />
            <Checkbox value="design" label="Design e Criação Visual" />
            <Checkbox value="ciberseguranca" label="Cibersegurança" />
            <Checkbox value="ia" label="Inteligência Artificial" />
            <Checkbox value="redes" label="Gestão de Redes Sociais" />
            <Checkbox value="mentoria" label="Mentoria e Educação" />
            <Checkbox
              value="comunidade"
              label="Moderação e Gestão de Comunidade"
            />
            <Checkbox value="admin" label="Administração e Planejamento" />
            <TextInput
              placeholder="Outra área"
              {...form.getInputProps("contributionOther")}
            />
          </Stack>
        </Checkbox.Group>

        <TextInput
          label="Habilidades e ferramentas que você usa"
          placeholder="Ex: Figma, Python, Canva"
          mt="md"
          {...form.getInputProps("tools")}
        />

        <Radio.Group
          label="Está disposta a aprender novas habilidades?"
          {...form.getInputProps("willingToLearn")}
        >
          <Stack>
            <Radio value="sim" label="Sim" />
            <Radio value="nao" label="Não" />
          </Stack>
        </Radio.Group>

        <Divider my="xl" />

        <Title order={3} className={classes.subtitle} ta="left" mt="xl">
          Declaração de Compromisso
        </Title>
        <Radio.Group
          label="Você confirma seu compromisso?"
          {...form.getInputProps("commitment")}
        >
          <Stack>
            <Radio value="sim" label="Sim" />
            <Radio value="nao" label="Não" />
          </Stack>
        </Radio.Group>

        <Divider my="xl" />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md">
            Enviar Formulário
          </Button>
        </Group>
      </form>
    </Container>
  );
}
