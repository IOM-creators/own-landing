import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './';

describe('Button component', () => {
  it('Button render', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('Button render with text', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('Button render with icon', () => {
    render(<Button icon="delete" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
