# React Calculator

This is a simple calculator application, built with React and TypeScript for a take-home code challenge. It supports the four basic arithmetic operations: addition, subtraction, multiplication, and division - as well as negation and percentage calculations.

### Check out the [live deployed version](https://64c6b7e8eececd2e917cdafe--eloquent-vacherin-0aa064.netlify.app/)

## Project Structure

- `src/Calculator.tsx`: This is the main Calculator component. It handles the UI and user interactions.
- `useCalculator()`: This is a custom hook that encapsulates the calculator's state and logic.
- `calculatorReducer()`: This is a reducer function that manages state updates for the calculator.

## Technology Used

- React.js
- TypeScript
- CSS (tailwindcss for styling)

## Features

- Supports basic arithmetic operations: addition, subtraction, multiplication, division, negation and percentage calculations.
- State management with a custom hook (`useCalculator`) and the `useReducer` hook
- Error handling for division by zero
- UI built with tailwindcss

## Running the Project Locally

To run the project on your local machine, follow these steps:

1. Clone the repository to your local machine
2. Navigate to the project directory in your terminal
3. Run `yarn` to install the necessary dependencies
4. Run `yarn dev` to start the development server
5. Run `yarn test --watchAll` to start the test runner
6. Open a browser and visit `http://localhost:5173`

## Considerations

The calculator was designed to be simple and user-friendly, with a focus on clean, maintainable code. It uses a custom hook and a reducer to manage state, providing a separation of concerns between UI and state logic.

The calculator handles edge cases like division by zero, and ensures only one decimal point can be added.

## Bugs & Future Improvements

There are some UX bugs like an infinitely long display when the user enters a long string of digits. Also the result of a calculation can be appended to, which is not ideal.

In future iterations of the calculator, we might consider adding more complex functionality, such as support for parentheses, exponentiation, and trigonometric functions. Additionally, we could improve the UI with more animations and a responsive design.

## Author

Tom Gallagher, 2023

## Questions or Comments?

Please feel free to reach out to me if you have any questions or comments about this project. I'm always happy to discuss my work!
