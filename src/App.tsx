import React from "react";
import { FaClipboard } from "react-icons/fa";
import { ComponentWrapper, VariantWrapper } from "./App.styled";
import { Avatar } from "./components/Avatar";
import { Button } from "./components/Button";
import { Pagination } from "./components/Pagination";

function App() {
  return (
    
    <div className="App">
      {/* Different Buttons */}
      <ComponentWrapper>
        <h3 data-testid="button">Buttons</h3>
        <VariantWrapper>
          <h4 data-testid="button">Variants</h4>
          <Button variant="primary">Hello</Button>
          <Button variant="secondary">Hello</Button>
        </VariantWrapper>
        <br />
        <VariantWrapper>
          <h4 data-testid="button">Disabled</h4>
          <Button variant="primary" disabled={true}>
            Hello
          </Button>
          <Button variant="secondary" disabled={true}>
            Hello
          </Button>
        </VariantWrapper>
        <br />
        <VariantWrapper>
          <h4 data-testid="button">Sizes</h4>
          <Button size="xs">Hello</Button>
          <Button size="sm">Hello</Button>
          <Button size="md">Hello</Button>
          <Button size="lg">Hello</Button>
        </VariantWrapper>
        <VariantWrapper>
          <h4 data-testid="button">Icons</h4>
          <Button rightIcon={<FaClipboard />}>Copy</Button>
          <Button leftIcon={<FaClipboard />}>Copy</Button>
          <Button size="lg" rightIcon={<FaClipboard />}>
            Copy
          </Button>
          <Button size="lg" leftIcon={<FaClipboard />}>
            Copy
          </Button>
        </VariantWrapper>
        <VariantWrapper>
          <Button onClick={() => console.log("button Clicked")}>
            Click me!
          </Button>
        </VariantWrapper>
      </ComponentWrapper>

      <ComponentWrapper>
        <h3 data-testid="avatar">Avatars</h3>
        <VariantWrapper>
          <h4 data-testid="avatar">Variants</h4>
          <Avatar name="Kola Tioluwani" />
          <Avatar name="Kola Tioluwani" src="https://bit.ly/sage-adebayo" />
        </VariantWrapper>
        <VariantWrapper>
          <h4 data-testid="avatar">Sizes</h4>
          <Avatar size="xs" name="Anand Kulkarni" />
          <Avatar size="sm" name="Baburoa" />
          <Avatar size="md" name="Albert S" />
          <Avatar size="lg" name="Ritesh Firodiya" />
        </VariantWrapper>
      </ComponentWrapper>
      <ComponentWrapper>
        <VariantWrapper>
          < Pagination count={10} currentPage={2} updateCurrentPage={10} data-testid="pagination"/>
        </VariantWrapper>
      </ComponentWrapper>
    </div>
  );
}

export default App;
