import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from '.';

describe('Icon component', () => {
  it('Icon render', () => {
    render(<Icon icon="delete" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
