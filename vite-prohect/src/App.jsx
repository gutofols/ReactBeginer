import { useState } from "react";
import "./App.css";

function App() {
  let [pessoas, setNomes] = useState(["Gabriel", "Ana", "Pedro"]);
  let [nomeImput, setNomeImput] = useState("");
  let [cpfImput, setCpfImput] = useState("");
  let [cpf, setCpf] = ([])

  function salvar() {
    pessoas.push(`Nome: ${nomeImput} | CPF:  ${cpfImput}`);
    setNomes([...pessoas]);
  }

  return (
    <div>
      <input
        onChange={(e) => {
          setNomeImput(e.target.value);
        }}
        value={nomeImput}
        type="text"
        placeholder="Nome: "
      />

<input
        onChange={(e) => {
          setCpfImput(e.target.value);
        }}
        value={cpfImput}
        type="text"
        placeholder="CPF: "
      />

      <button onClick={salvar}>Salvar</button>

      <ol>
        {pessoas.map((nome) => {
          return <li>{nome}</li>;
        })}
      </ol>

    </div>
  );
}

export default App;
