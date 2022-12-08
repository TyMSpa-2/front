# TyMSpa - Mobile

TyMSpa mobile application

- [Conventions](#conventions)
  - [Commit convention](#commit-convention)
  - [Naming convention](#naming-convention)
## Conventions
### Commit convention
We use [Angular commit message standard](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format) as a commit convention. Please refer to the linked standard for detailed information. 

CommitLint is activated for the project and will guide you with the errors on your commit messages. If you're using WebStorm, we recommend installing the plugin [Git Commit Template](https://plugins.jetbrains.com/plugin/9861-git-commit-template).

```
<type>: <short summary>
  │            │
  │            └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

##### Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **test**: Adding missing tests or correcting existing tests

##### Summary

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end


#### Commit Message Body & Footer

* Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".
* Breaking Change section should start with the phrase "BREAKING CHANGE: " followed by a summary of the breaking change, a blank line, and a detailed description of the breaking change that also includes migration instructions.


### Naming convention

We use [Airbnb JavaScript standard](https://github.com/airbnb/javascript#naming-conventions) as a naming convention. Please refer to the linked standard for detailed information.
 - Use camelCase when naming objects, functions, and instances. Example `myFunction()`   
 - Use PascalCase for naming constructors, classes or components. Example: `MyComponent`
 - A base filename should exactly match the name of its default export. Example: `MyComponent.ts`
 - Folders containing components should be named after the component. Example: `MyComponent/`
 - Do not use trailing or leading underscores
 - Avoid single letter names. Be descriptive with your naming
 - Acronyms and initialisms should always be all uppercased, or all lowercased
