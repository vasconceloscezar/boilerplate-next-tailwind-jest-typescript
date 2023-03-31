import React from 'react'
import { render, screen } from '@testing-library/react'
import { Preloader } from '.'

describe('Preloader', () => {
  it('renders three hollow dots', () => {
    render(<Preloader />)

    const dots = screen.getAllByRole('presentation')
    expect(dots).toHaveLength(3)
  })
})
