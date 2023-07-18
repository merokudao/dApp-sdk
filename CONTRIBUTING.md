# Contributing to dApp SDK

Thank you for your interest in contributing to the dApp SDK! We appreciate the efforts of our
community members and welcome contributions to improve and enhance the SDK. This document
outlines the contribution process and provides guidelines for making your contributions as smooth
as possible.


# Code of Conduct

If you're contributing to this repo, you are a **Development Partner**. i.e.
You are from a
projects that want to build open-source features and implementation
for kits provided by dApp-sdk.

By participating in this project, you agree to abide by our
[Code of Conduct](CODE_OF_CONDUCT.md). Please ensure that your contributions and interactions
with the community follow the guidelines outlined in the Code of Conduct.


# Creating an implementation package

## Basic Steps

1. **Fork the repository:** To start contributing, fork the dApp SDK repository to your org's
GitHub account.

2. **Clone your fork:** Clone your fork to your local machine:

```bash
git clone https://github.com/<your-org>/dapp-sdk.git
```

3. **Create a new branch**: Create a new branch for your feature or bugfix:

```bash
git checkout -b my-feature-branch
```

## Implementation Guidelines

Implement your feature or bugfix, ensuring that you follow the
following coding standards and best practices.


1. Create a new directory under `packages` with the name of implementation packge. This will be a 
concatenation of "kit name" and the "provider". Ex: If you are a provider for "Messaging" 
kit, and your org name is "CoolOrg", then the implementation package name 
is `messaging-coolorg`. If you're building for a ui kit, then package name
will be `messaging-ui-coolorg`.

2. Inside this directory, create the directories `src` to contain all source code 
and `test` to contain all test cases.

3. Your `package.json` should have following properties in the defined fashion

	1. `name` : `@dapp-sdk/IMPLEMENTATION_PACKAGE`, where `IMPLEMENTATION_PACKAGE` is the package name as defined above.
	2. `author`: Name of your Team or Organization
	3. `license`: `MIT`
	4. `main`: `dist/messaging-coolorg/src/index.js`. Update this as per your code.
	5. `types`: `dist/messaging-coolorg/src/index.d.ts`. Update this as per your code.
	6. `keywords`: A set of keywords describing. We will add keywords `meroku`, `dApp-sdk` to any keywords you already have.
	7. `"publishConfig": {"access": "public"}` To enable publishing of this package. You should do this only after the feature is ready.
	8. You need to specify the `"repository"` property with the specifcation described below.
 	9. At a minimum following scripts are needed
		1. `build` - To build the project.
		2. `test` - To test the project

An example config is below

```json
"keywords": [
	"meroku",
	"dapp-sdk"
],
"scripts": {
	"build": "tsc",
	"test": "mocha"
},
"publishConfig": {"access": "public"},
"repository": {
        "type": "git",
        "url": "git+https://github.com/merokudao/dApp-sdk.git"
    },
    "homepage": "https://github.com/merokudao/dApp-sdk.git#readme",
    "bugs": {
        "url": "https://github.com/merokudao/dApp-sdk.git/issues"
    },
    "files": [
        "dist/**/*"
    ],
}
```

4. Your `tsconfig.json` should be able properly build the package. Take a look at the existing [tsconfig.json for ui package](../packages/analytics-ui-dapplooker/tsconfig.json) and [tsconfig.json for package](../packages/analytics-dapplooker/tsconfig.json) for examples.


5. **Commit your changes**: Commit your changes to the new branch:

```bash
git add .
git commit -m "Add my feature"

```

6. **Keep your fork up-to-date**: Sync your fork with the upstream repository to ensure your changes can be easily merged:

```bash
git remote add upstream https://github.com/merokudao/dapp-sdk.git
git fetch upstream
git merge upstream/main
```

7. **Push your changes**: Push your changes to your fork:

```shell
git push origin my-feature-branch

```

## Submit for Review


### Pull Request Guidelines

1. Ensure that your pull request includes a clear and detailed description of the changes you have
made.
2. If your pull request addresses an existing issue, please reference the issue number in your
description.
3. Add relevant labels to your pull request, such as feature, bugfix, documentation, etc.
4. Make sure your code follows the project's coding standards and best practices.
5. Include tests for your changes, if applicable.
6. Update the documentation as necessary.

### Review Process

1. Github Actions will run and ensure that builds are happening & tests are running
2. If they fail, it's your responsinility to fix them. Let us know if anything is required to be
done from our side.
3. A member of the `merokudao` org will review the code, and provide feedback.
4. If everything is okay, this will be merged with the main branch

### Publishing of module

1. Once a new module is added or an existing module is updated, a member of `merokudao` org
will publish the package

