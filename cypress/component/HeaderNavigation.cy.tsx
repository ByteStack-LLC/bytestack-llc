import React from 'react'
import HeaderNavigation from '../../app/components/header_components/HeaderNavigation'

describe('<HeaderNavigation />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HeaderNavigation />)
  })
})