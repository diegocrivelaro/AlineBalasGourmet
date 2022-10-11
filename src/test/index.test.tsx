import Home from "@/pages/index";
import { render, screen } from "@testing-library/react";

describe(`TEST`, () => {
  it(`TEST`, () => {
    render(<Home />);

    expect(screen.getByTestId(`casa`)).toBeInTheDocument();
  });
});
