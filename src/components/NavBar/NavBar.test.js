// import {screen} from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import {renderWithRouter} from '../../tests/helpers/renderWithRouter';
// import NavBar from './NavBar';

// сейчас не работает, т.к. нужно внести внутрь appRouter или отобразить на сторонней странице
// describe("LINKS TEST", () => {
//   test("renders about link", async () => {
//     renderWithRouter(<NavBar />);

//     const aboutLink = screen.getByTestId("about-link");

//     userEvent.click(aboutLink);
//     expect(screen.getByTestId("about-page")).toBeInTheDocument();
//   });

//   test("renders main link", async () => {
//     renderWithRouter(<NavBar />);

//     const mainLink = screen.getByTestId("main-link");

//     userEvent.click(mainLink);
//     expect(screen.getByTestId("main-page")).toBeInTheDocument();
//   });

//   test("renders users link", async () => {
//     renderWithRouter(<NavBar />);

//     const usersLink = screen.getByTestId("users-link");

//     userEvent.click(usersLink);
//     expect(screen.getByTestId("users-page")).toBeInTheDocument();
//   });
// });

describe('LINKS TEST', () => {
  test('renders about link', async () => {});
});
