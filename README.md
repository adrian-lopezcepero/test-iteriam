# Iteriam Login

Iteriam Login is test performed to access iteriam services.

[Demo of tha app](https://iteriam-app.web.app/login)

User: test@iteriam.com
Password: 123456

*** Be careful with firewall and proxy configurations. You must have internet access to perform Firebase login successfully  ***

Source code: https://github.com/adrian-lopezcepero/test-iteriam

## Table of Contents

- [Start up](#description)
- [Description](#description)
- [Documentation](#Documentation)
- [Licende](#License)

## **Start up**

# Init

1. Run `npm i`
2. Run `npm run start`

# Testing

1. npm run test
2. npm run e2e or npm run e2e:ci

# Deploy

1. Run `npm run browser:build:pro`

## **Description**

We provide a short descriptions of the architecture of the app:

**Angular**

- **Feature and shared modules**
- **Lazy loading modules**
- **Tailwindcss to easy mockup**
- **i18n**

**NgRx**

- **Use of NgRx as state management**
- **Application of the Redux pattern**

**Testing**

- **Jasmine and Karma for unit and integration testing**
- **Cypress testing library to perform e2e tests**

**Other**

- **Applied husky hooks and commit lint** to use conventional commits to prevent bad practices on code.
- **eslint and stylelint** as lint tools
- **Git Flow**


## **Documentation**

[Ionic guide](https://ionicframework.com/docs/intro/cli)
[Husky hooks](https://typicode.github.io/husky/#/)
[Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
[NgRx](https://ngrx.io/docs)
[Testing library](https://testing-library.com/)
[Cypress](https://testing-library.com/docs/cypress-testing-library/intro/)
[Firebase](https://firebase.google.com/)
[Tailwindcss](https://tailwindcss.com/)

## **License**

[MIT](https://choosealicense.com/licenses/mit/)
