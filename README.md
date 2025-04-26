# Remix + Express + AWS Template

This project is a robust template for building modern web applications using [Remix](https://remix.run/), [Express](https://expressjs.com/), and AWS Amplify. It comes pre-configured with essential tools, testing frameworks, and GitHub Actions workflows to streamline development and deployment.

## Features

- **Remix Framework**: A full-stack web framework for building fast, dynamic, and scalable web applications.
- **Express Integration**: Use Express as the server for handling requests and middleware.
- **AWS Amplify Deployment**: Pre-configured for deployment to AWS Amplify with a custom `amplify.yml` file.
- **Tailwind CSS**: Pre-installed and configured for styling.
- **Testing Frameworks**:
  - **Vitest**: For unit testing.
  - **Playwright**: For end-to-end testing.
- **GitHub Actions Workflows**:
  - **Linting**: Ensures code quality with ESLint.
  - **Type Checking**: Validates TypeScript types.
  - **Unit Testing**: Runs Vitest tests with coverage reports.
  - **End-to-End Testing**: Executes Playwright tests.
  - **SonarQube Integration**: For code quality and security analysis.
  - **Auto-Formatting**: Automatically formats code with Prettier.
  - **Deployment**: Triggers AWS Amplify builds on pushes to the `main` branch.

---

## Development

To get started with development, run:

```sh
npm run dev
```

This will start the Express + Remix development server with hot reloading.

## Testing

### Unit Tests

Run unit tests with [Vitest](https://vitest.dev/):

```sh
npm run test:unit
```

### End-to-End Tests

Run [Playwright](https://playwright.dev/) tests in development mode:

```sh
npm run test:e2e:dev
```

Run Playwright tests in CI mode:

```sh
npm run test:e2e:run
```

Install Playwright browsers and dependencies:

```sh
npm run test:e2e:install
```

> Playwright test UI (`test:e2e:dev`) is useful for debugging during development.

### Coverage Reports

Generate unit test coverage report:

```sh
npm run test:coverage
```

Coverage reports will be output in the `coverage/` folder.

## SonarQube Setup

SonarQube is integrated into the GitHub Actions workflow for code quality and security analysis.  
To set it up on free remote SonarQube, follow these steps:

1. Create a SonarQube account and project.
2. Generate an authentication token.
3. Add the token to your GitHub repository secrets as `SONAR_TOKEN`.
4. Create a `sonar-project.properties` file in the root of your project with the following content:

```properties
sonar.projectKey=your-project-key
sonar.organization=your-organization
```

5. Replace `your-project-key` and `your-organization` with your actual SonarQube project key and organization.
6. Push your changes to the `main` branch.
7. The GitHub Actions workflow will automatically run SonarQube analysis on each push to the `main` branch and PRs.
8. You can view the results in your SonarQube dashboard.
9. (Optional) Customize the `sonar-project.properties` file to include/exclude specific files or directories from analysis.

## Additional Scripts

Here are some useful commands to streamline development:

| Script                 | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| `npm run dev`          | Start the development server.                                |
| `npm run build`        | Build the project for production.                            |
| `npm run start`        | Start the production server.                                 |
| `npm run lint`         | Run ESLint to check for code issues.                         |
| `npm run lint:fix`     | Run ESLint and automatically fix issues.                     |
| `npm run format`       | Format codebase using Prettier.                              |
| `npm run format:check` | Check formatting without modifying files.                    |
| `npm run typecheck`    | Run TypeScript type checking.                                |
| `npm run clean`        | Clean the build directory.                                   |
| `npm run nuke`         | Clean everything (build, node_modules, locks) and reinstall. |

## Deployment

This template is pre-configured for AWS Amplify.

- Simply **push** your changes to the `main` branch.
- The GitHub Actions workflow will trigger a new build and deployment to AWS Amplify.

You can customize the build process in the provided `amplify.yml` file.

## Documentation Links

- 📖 [Remix Documentation](https://remix.run/docs)
- 📖 [Vitest Documentation](https://vitest.dev/)
- 📖 [Playwright Documentation](https://playwright.dev/)
- 📖 [Tailwind CSS Documentation](https://tailwindcss.com/)
- 📖 [AWS Amplify Documentation](https://docs.amplify.aws/)
- 📖 [SonarQube Documentation](https://docs.sonarsource.com/)
