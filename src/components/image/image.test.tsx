import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from './';

describe('Image component', () => {
  it('Image render', () => {
    render(<Image src="/" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
