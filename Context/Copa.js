import { createContext, useState } from 'react';

export const CopaContext = createContext();

export function CopaProvider({ children }) {

  const [jogadores, setJogadores] = useState([]);
  const [avaliacoes, setAvaliacoes] = useState([]);

  function adicionarJogador(jogador) {
    setJogadores((lista) => [...lista, jogador]);
  }

  function removerJogador(id) {
    setJogadores((lista) =>
      lista.filter((item) => item.id !== id)
    );
  }

  function adicionarAvaliacao(avaliacao) {
    setAvaliacoes((lista) => [
      ...lista,
      avaliacao
    ]);
  }

  return (
    <CopaContext.Provider value={{jogadores,adicionarJogador, removerJogador,avaliacoes,adicionarAvaliacao}}>
      
      {children}
    </CopaContext.Provider>
  );
}