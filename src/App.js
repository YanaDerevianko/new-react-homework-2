import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { TextContainer } from "./components/TextContainer/TextContainer";
import { StyledCard } from "./components/StyledCard/StyledCard";
import { Spoiler } from "./components/Spoiler/Spoiler";
import { ModalWindowContainer } from "./components/ModalWindowContainer/ModalWindowContainer";
import { ButtonComponentWrapper } from "./components/ButtonComponentWrapper/ButtonComponentWrapper";
import { CommentComponentWrapper } from "./components/CommentComponentWrapper/CommentComponentWrapper";

function App() {
  return (
    <div className="App">
      <h1 className="header">REACT HOMEWORK 2</h1>

      <Counter />
      <TextContainer />

      <StyledCard>
        <Counter />
        <TextContainer />
      </StyledCard>

      <Spoiler />
      <ModalWindowContainer />
      <ButtonComponentWrapper />
      <CommentComponentWrapper />
    </div>
  );
}

export default App;
