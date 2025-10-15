import { useState, useEffect } from "react";
import "./home.css";
import Cavernoso from "../public/Cavernoso.gif";
import CavernosoMoggado from "../public/CavernosoMoggado.gif";

export default function Home() {
  const [contador, setContador] = useState(0);
  const [multiplicador, setMultiplicador] = useState(0.5);
  const [upgradeVisivel, setUpgradeVisivel] = useState(false);
  const [mensagemUpgradeVisivel, setMensagemUpgradeVisivel] = useState(false);
  const [tanto, setTanto] = useState(0);
  const [background, setBackground] = useState({
    image: "none",
    color: "black",
  });

  const handleClick = () => {
    const novoContador = contador + multiplicador;
    setContador(novoContador);

    let novoTanto = 0;
    if (novoContador >= 10 && !upgradeVisivel) novoTanto = 1;
    if (novoContador === 100 && !upgradeVisivel) novoTanto = 2;
    if (novoContador === 200 && !upgradeVisivel) novoTanto = 4;
    if (novoContador === 500 && !upgradeVisivel) novoTanto = 6;
    if (novoContador === 2000 && !upgradeVisivel) novoTanto = 10;
    if (novoContador === 5000 && !upgradeVisivel) novoTanto = 100;
    if (novoContador === 10000 && !upgradeVisivel) novoTanto = 500;
    if (novoContador === 10000000000 && !upgradeVisivel)
      novoTanto = 199876543210987654321;

    if (novoTanto > 0) {
      setTanto(novoTanto);
      setUpgradeVisivel(true);
    }

    setBackground({ image: `url(${CavernosoMoggado})`, color: "black" });
    setTimeout(() => {
      setBackground({ image: "none", color: "black" });
    }, 4400);
  };

  const handleUpgrade = () => {
    setMultiplicador(tanto);
    setUpgradeVisivel(false);
    setMensagemUpgradeVisivel(true);
  };

  return (
    <div
      style={{
        backgroundImage: background.image,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: background.color,
        minHeight: "100vh",
      }} class="divprincipal"
    >
      <div className="cont">
        <h1>Você está no site do vitamina</h1>
        <img id="gif" src={Cavernoso} alt="Imagem caveira girando" />
      </div>

      <button id="botao2" className="botao2" onClick={handleClick}>
        Click
      </button>
      <h2 id="contador">Moggadas: {contador}</h2>

      <button
        id="upgrade"
        style={{ display: upgradeVisivel ? "block" : "none" }}
        onClick={handleUpgrade}
      >
        {tanto}X
      </button>

      <div className="divbemmoggada">
        <p
          id="mensagem-upgrade"
          style={{ display: mensagemUpgradeVisivel ? "block" : "none" }}
        >
          Upgrade Ativado!
        </p>
      </div>
    </div>
  );
}
