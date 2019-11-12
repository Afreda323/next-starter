import React from 'react'
import { render } from '@testing-library/react'
import Home from './index'

describe('/index.tsx', () => {
  it('Should render', () => {
    const home = render(<Home />)
    expect(home.getAllByText('Welcome to Next.js!')).toBeTruthy()
  })
})
