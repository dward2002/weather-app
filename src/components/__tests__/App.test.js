import { render, screen } from '@testing-library/react';
import App from '../../App';

test('Renders App Component', () => {
  render(<App />);
});

test('App Displays Correct Title', () => {
  render(<App />);
  const AppElement = screen.getByTestId('PageHeading');
  expect(AppElement).toHaveTextContent("Today's Weather");
});
