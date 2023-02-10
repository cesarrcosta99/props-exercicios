import React from "react";
import "./styles.css";
import CardVideo from "./components/CardVideo"

export default function App() {
  const objeto = {
    imagem: <img src="https://picsum.photos/400/400?a=1" alt="" />,
    titulo: "César Costa"
  }

  const objeto2 = {
    imagem: <img src="https://conteudo.imguol.com.br/c/esporte/42/2023/01/07/cristiano-ronaldo-e-apresentado-pelo-al-nassr-1673140243161_v2_450x600.jpg" alt="" />,
    titulo: "Julio Costa"
  }

  const objeto3 = {
    imagem: <img src="https://veja.abril.com.br/wp-content/uploads/2022/12/messivangaal.webp?w=1280&h=720&crop=1" alt="" />,
    titulo: "Breno Costa"
  }

  const objeto4 = {
    imagem: <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltfd6f22d9d0494112/638e44e494eb720b623aec72/GettyImages-1446977379.jpg" alt="" />,
    titulo: "Lucão"
  }

  const objeto5 = {
    imagem: <img src="https://i.ytimg.com/vi/cef62Q8yVTU/maxresdefault.jpg" alt="" />,
    titulo: "Vitoria"
  }

  const objeto6 = {
    imagem: <img src="https://istoe.com.br/wp-content/uploads/2022/11/1-6.jpg" alt="" />,
    titulo: "Zezinho"
  }

  const objeto7 = {
    imagem: <img src="https://yt3.googleusercontent.com/ADGE8m3UNXvPZgMnQUpt2xyA4glcd3seaQaqlktPVvFjpfSPvCNpdJy-pSm3_P_PTIAShUe56Q=s900-c-k-c0x00ffffff-no-rj" alt="" />,
    titulo: "CÉSAR NAMORADO VITORIA"
  }

  const objeto8 = {
    imagem: <img src="https://revistainfoco.com.br/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-02-at-13.14.06.jpeg" alt="" />,
    titulo: "Zezinho"
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>
          <CardVideo objeto={objeto} objeto2={objeto2} objeto3={objeto3} objeto4={objeto4} objeto5={objeto5} objeto6={objeto6} objeto7={objeto7} objeto8={objeto8} />
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
} 
