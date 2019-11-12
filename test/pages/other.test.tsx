import React from 'react'
import { render } from '@testing-library/react'
import Other from '../../pages/other'

describe('/pages/other.tsx', () => {
  it('Should render', () => {
    const other = render(<Other />)
    expect(other.getAllByText('Other Page')).toBeTruthy()
  })
})
