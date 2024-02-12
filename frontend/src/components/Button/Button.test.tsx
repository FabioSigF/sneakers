import { render, screen } from "@testing-library/react"
import Button from "."

describe("Button component", () => {
  //Mostrar título passado como parâmetro
  it("should show title by parameter", () => {
    render(<Button 
      title="Click me"
    />);
    screen.getByText("Click me");
  })
})