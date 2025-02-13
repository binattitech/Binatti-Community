import { FooterCentered } from "@/components/footer/FooterCentered";
import { GetInTouchSimple } from "@/components/form/GetInTouchSimple";
import { HeaderMegaMenu } from "@/components/header/HeaderMegaMenu";
import { CStep } from "@/components/stepper/CStep";


export default function Voluntaria() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header>
        <HeaderMegaMenu />
      </header>

      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <CStep />
        <GetInTouchSimple />
      </main>

      <footer style={{ marginTop: "auto" }}>
        <FooterCentered />
      </footer>
    </div>
  );
}
