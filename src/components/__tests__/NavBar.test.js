import { render, screen, cleanup } from '@testing-library/react';
import NavBar from '../NavBar';

test('Renders Navbar Component', () => {
    render(<NavBar />);
});

test('NavBar Brand Link Displays Correct Text',() => {
    const { getByTestId } = render(<NavBar />);
    const brandLink = getByTestId('NavBarBrand');
    expect(brandLink).toHaveTextContent('Weather-App');
});

test('NavBar Home Link Displays Correct Text ',() => {
    const { getByTestId } = render(<NavBar />);
    const homeLink = getByTestId('NavBarHomeLink');
    expect(homeLink).toHaveTextContent('Home');
});

test('NavBar Login Link Displays Correct Text ',() => {
    const { getByTestId } = render(<NavBar />);
    const homeLink = getByTestId('NavBarLoginLink');
    expect(homeLink).toHaveTextContent('Login');
});

