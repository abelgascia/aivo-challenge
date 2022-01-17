import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Renders login page if not logged in", () => {
  render(<App />);
  const linkElement = screen.getByText(/login aivoflix/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renders logout button", () => {
  render(<App />);
  const button = screen.getByText(/logout/i);
  expect(button).toBeInTheDocument();
});

test("Renders movies and series list", () => {
  render(<App />);
  const linkElement = screen.getByText(/movies/i);
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = screen.getByText(/series/i);
  expect(linkElement2).toBeInTheDocument();
});

test("Filtering can be done with the input", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(
    /Buscar por nombre o año.../i
  );
  expect(inputElement).toBeInTheDocument();
  inputElement.value = "San";
  fireEvent.change(inputElement);
  const linkElement = screen.getByText(/San/i);
  expect(linkElement).toBeInTheDocument();
});

test("If not find results it displays an message", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(
    /Buscar por nombre o año.../i
  );
  expect(inputElement).toBeInTheDocument();
  inputElement.value = "asd";
  fireEvent.change(inputElement);
  const linkElement = screen.getByText(/no se encontraron resultados.../i);
  expect(linkElement).toBeInTheDocument();
});
