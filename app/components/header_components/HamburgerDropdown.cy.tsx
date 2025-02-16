import React from 'react'
import HamburgerDropdown from './HamburgerDropdown'

describe('<HamburgerDropdown />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HamburgerDropdown />)
  })
})