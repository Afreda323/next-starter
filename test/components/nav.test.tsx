import React from 'react'
import { render } from '@testing-library/react'
import Nav from '../../components/Nav'

describe('/components/nav.tsx', () => {
  it('Should render both links', () => {
    const nav = render(<Nav />)
    expect(nav.baseElement.querySelector('ul').childNodes).toHaveLength(3)
  })
})
