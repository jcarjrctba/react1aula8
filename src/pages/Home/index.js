import "../../pages/Login/styles.css";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [contador, setContador] = useState(0);
  const { listaDeUsuarios } = location.state;

  const paraLogin = () => {
    navigate("/");
  };

  useEffect(() => {
    localStorage.setItem("altera", "Alterado o estado do contador");

    return () => {
      localStorage.clear();
    };
  }, [contador]);

  const text = localStorage.getItem("altera");

  return (
    <div className="container">
      <div className="box">
        <Title title="Home" />
        <ul>
          <h2>Lista de Usuários:</h2>
          {listaDeUsuarios.map((usuario) => (
            <li key={usuario.id}>Email do usuário: {usuario.email}</li>
          ))}
        </ul>

        <Button button="Voltar para login" noClique={paraLogin} />

        <h1>Contador: {contador}</h1>
        <button onClick={() => setContador(contador + 1)}>+</button>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Home;
