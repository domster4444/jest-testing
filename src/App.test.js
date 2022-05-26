import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * @import components
 */
import App from './App';

describe('App Component', () => {
  test('EmailInputField is empty initially', () => {
    //?render component
    render(<App />);

    //?find elements from rendered screen
    //*(by default passInputField dont have any implicit role,So, using getByLabelText)
    const emailInputField = screen.getByRole('textbox');
    const emailInputField_Specific = screen.getByRole('textbox', {
      name: /email-id/,
    });
    //!type='password' dont have any role by default
    const passwordInputField = screen.getByLabelText(/password-id/i);
    const confirmPasswordInputField = screen.getByLabelText('confirmPassId');

    //?add multiple  assertion
    //expect emailInputField to be empty initially
    expect(emailInputField.value).toBe('');
    expect(emailInputField_Specific.value).toBe('');

    //expect passwordField to be empty initially
    expect(passwordInputField.value).toBe('');

    //expect confirmPasswordInputField to be empty initially
    expect(confirmPasswordInputField.value).toBe('');
  });

  test('should be able to type an email ', () => {
    //?render component
    render(<App />);

    //?find elements from rendered screen with role-textbox & lable-htmlFor-value='email-id', label value ="includes email-id", lable target input id='email-id',name='email-id'
    const emailInputField = screen.getByRole('textbox', {
      //! with "email' keyword case-not-sensitive
      name: /email-id/i,
    });

    //?assertion
    userEvent.type(emailInputField, 'selena@gmail.com');
    expect(emailInputField.value).toBe('selena@gmail.com');
  });

  test('should be able to type password', () => {
    //?render component
    render(<App />);

    //? select element
    const passwordInputField = screen.getByLabelText(/password-id/i);
    userEvent.type(passwordInputField, '1234');
    expect(passwordInputField.value).toBe('1234');
  });

  test('should be able to type confirm-password', () => {
    //?render component
    render(<App />);

    //? select element
    const passwordInputField = screen.getByLabelText(/confirmPassId/i, {
      name: /confirmPassId/i,
    });
    userEvent.type(passwordInputField, '1234');
    expect(passwordInputField.value).toBe('1234');
  });

  test('should show error for invalid email submit', () => {
    //?render component
    render(<App />);

    //? select element
    const emailInputField = screen.getByRole('text', {
      name: /email-id/i,
    });

    //?assertion
    

  });
});

