---
applyTo: '**'
---
Always use the Conventional Commits specification when writing commit messages.

Format: `<type>(<optional scope>): <description>`

Allowed types:
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files

Rules:
- Use lowercase for the type and description.
- Do not end the description with a period.
- Use the imperative mood in the description (e.g., "add" not "added" or "adds").
- Keep the description concise (50 characters or less preferred).
- Add a body after a blank line for additional context when needed.
- Append `!` after the type/scope for breaking changes (e.g., `feat!: remove deprecated API`).
