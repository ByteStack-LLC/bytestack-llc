import React from 'react'
import HamburgerDropdown from '../../app/components/header_components/HamburgerDropdown'

describe('<HamburgerDropdown />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HamburgerDropdown />)
  })
})