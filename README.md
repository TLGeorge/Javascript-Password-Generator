# Javascript-Password-Generator

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

The following image demonstrates the application functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)


review activity 20 - hard loop

1. Prompt user to add a desired password length between 8-128.
    * If the user selects a valid password length, then they will be prompted to verify which criteria they want included in their secure password. 

2. Prompt the user to select passwprd criteria to include in their secure password.
    * If users says yes they want lowercase characters in their password, then the password generator will add random lowercase characters to the secure password.

    * If users says yes they want uppercase characters in their password, then the password generator will add random uppercase characters to the secure password.

    * If users says yes they want numeric characters in their password, then the password generator will add random numeric characters to the secure password.

    * If users says yes they want uppercase characters in their password, then the password generator will add random uppercase characters to the secure password.

    * If the user doesn't select at least one of the password criteria options, they have to start over. 

3. After all the criteria is picked, random values from each are added to the secure password.
4. The secure password is then displayed to the user. 