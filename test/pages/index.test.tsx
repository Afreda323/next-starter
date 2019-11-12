import React from 'react'
import { render } from '@testing-library/react'
import Home from '../../pages/index'

describe('/pages/index.tsx', () => {
  it('Should render', () => {
    const home = render(<Home />)
    expect(home.getAllByText('Welcome to Next.js!')).toBeTruthy()
  })
})
