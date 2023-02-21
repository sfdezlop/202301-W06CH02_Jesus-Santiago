import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import App from "./App";

test("Renders text shown", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByText(/Got/i)).toBeInTheDocument();
});

// jest.mock("../header/header"); //Faltaintroducir Header folder
// jest.mock("../app.router/approuter"); //Falta introducir AppRouter folder
// jest.mock("../footer/footer"); //Falta introducir Footer folder

// describe("Given App component", () => {
//   beforeEach(() => {
//     // eslint-disable-next-line testing-library/no-render-in-setup
//     render(
//       <Header>
//         <></>
//       </Header>
//     );
//   });
//   describe("When it is render", () => {
//     test("Then it should call Header, AppRouter & Footer", () => {
//       render(<App />);
//       expect(Header).toHaveBeenCalled();
//       expect(AppRouter).toHaveBeenCalled();
//       expect(Footer).toHaveBeenCalled();
//     });
//   });
// });
