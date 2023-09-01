import Head from "next/head";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();
  const titleReplace = router.pathname.toString();
  const replace = titleReplace.replace("/", "").replace("/", " | ").replace("-"," ").replace("-"," ").replace("-"," ").replace("-"," ");
  const prueba = replace === "" ? "" : `| ${replace}`;
  return (
    <>
      <Head>
        <title>
          {" "}
          Psicóloga Andrea Costantino: psicoterapia y salud mental {prueba}
        </title>
        <meta
          name="description"
          content="Andrea Costantino es un psicólogo clínico con amplia experiencia en el tratamiento de trastornos mentales a través de terapias individuales, de pareja y familiares. Ofrece asesoramiento psicológico especializado en su centro de atención en Online"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mental-health.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sevillana&display=swap"
          rel="stylesheet"
        />
       <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"/>
        
      </Head>
    </>
  );
}
