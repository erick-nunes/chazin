import './styles.css';

export function Home() {
  return (
    <div className="container">
      <h1>CHAZIN</h1>
      <div className="subtitle">da vovó ...</div>
      <img src="src/assets/favicon.png" alt="Vovó" className="icone-vovo" />
      <input type="text" placeholder="O que está sentindo meu neto..."/>
      <button type="button">Procurar</button>
    </div>
  )
}
