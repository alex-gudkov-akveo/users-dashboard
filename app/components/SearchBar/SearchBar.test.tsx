import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => {
  return {
    useRouter: jest.fn().mockImplementation(() => {
      return { push: jest.fn() };
    })
  };
});

describe('SearchBar', () => {
  test('render input', () => {
    render(<SearchBar />);

    const nameInput = screen.getByTestId('SearchBar_birthInput');
    const birthInput = screen.getByTestId('SearchBar_birthInput');

    expect(nameInput).toBeInTheDocument();
    expect(birthInput).toBeInTheDocument();
  });
});
