import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
// import renderer from 'react-test-renderer';

import UserPage from '../client/containers/UserPage';
import ProductCardUser from '../client/containers/components/ProductCardUser';

// Test block for UserPage Components
describe('Unit Testing UserPage Components', () => {
  // Test block for UserPage.jsx
  describe('UserPage.jsx', () => {

    let UPComponent;
    beforeAll(() => {
      UPComponent = render(<UserPage/>);
    });

    test('Page renders a heading "Your Products"', () => {
      expect(UPComponent.getByText('Your Products'));
    })
  })

  // Test block for ProductCardUser
  // describe('ProductCardUser.jsx', () => {
  //   beforeAll(() => {

  //   })
  // })
});