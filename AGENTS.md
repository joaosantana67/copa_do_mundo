import { createContext, useState } from "react";

export const LivroContext = createContext();

export function LivroProvider({ children }) {
  const [livros, setLivros] = useState([]);

  function adicionarLivro(livro) {
    setLivros((old) => [...old, livro]);
  }

  function removerLivro(id) {
    setLivros((old) => old.filter((livro) => livro.id !== id));
  }

  return (
    <LivroContext.Provider value={{ livros, adicionarLivro, removerLivro }}>
      {children}
    </LivroContext.Provider>
  );
}