# Contributing to SolarNaija

First off, thanks for taking the time to contribute! 🎉

This document provides guidelines for contributing to SolarNaija. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## 🎯 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title** for the issue
* **Describe the exact steps** which reproduce the problem
* **Provide specific examples** to demonstrate the steps
* **Describe the behavior** you observed after following the steps
* **Explain which behavior** you expected to see instead and why
* **Include screenshots and animated GIFs** if possible
* **Include your environment details** (browser, OS, device)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

* **Use a clear and descriptive title**
* **Provide a step-by-step description** of the suggested enhancement
* **Provide specific examples** to demonstrate the steps
* **Describe the current behavior** and **explain which behavior you expected**
* **Explain why this enhancement would be useful**
* **List some other projects** where this enhancement exists, if applicable

### Pull Requests

The process described below has the goal to:

1. Maintain quality
2. Fix problems that are important to users
3. Engage the community in working toward the best possible SolarNaija
4. Enable a sustainable system for maintainers to review contributions

Please follow these steps:

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following our coding conventions
3. **Test your changes** to ensure nothing is broken
4. **Update the documentation** if needed
5. **Submit your pull request**

## 💻 Development Setup

### Prerequisites

- Node.js 18+ and npm
- Git
- A code editor (VS Code recommended)

### Setup Steps

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/solar_review_nigeria.git
cd solar_review_nigeria

# Add upstream remote
git remote add upstream https://github.com/ericprince957-cloud/solar_review_nigeria.git

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

### Making Changes

1. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

2. **Make your changes** following the coding conventions below

3. **Test your changes**:
   ```bash
   npm run typecheck  # Check for TypeScript errors
   npm run build      # Ensure it builds
   ```

4. **Commit your changes** with a clear message:
   ```bash
   git commit -m "Add feature: brief description"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** on GitHub

## 📝 Coding Conventions

### TypeScript

- Use TypeScript for all new files
- Define proper types (avoid `any`)
- Use interfaces for object shapes
- Export types when they're used in multiple files

### React

- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use proper prop types

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Use the custom color palette (solar-*, trust-*)
- Keep responsive design in mind

### File Organization

- One component per file
- Name files after the component (PascalCase)
- Keep related files together
- Use index files for exports when appropriate

### Content

- All product data goes in `src/data/products.ts`
- Follow the existing product template
- Include all required fields
- Keep reviews honest and well-researched

## 🎨 Design Guidelines

### Colors

Use the established color palette:
- `solar-*` — Warm gold/amber for accents and CTAs
- `trust-*` — Deep blue for headers and trust elements
- `green-*` — For positive/success states
- `gray-*` — For neutral elements

### Typography

- Font: Inter (already loaded)
- Headings: Bold/Extrabold
- Body: Regular weight
- Use proper hierarchy (h1 > h2 > h3)

### Components

- Use existing components when possible
- Keep components reusable
- Document props with TypeScript types
- Include loading and error states

## 📄 Content Guidelines

### Product Reviews

When adding or updating product reviews:

1. **Be honest** — Don't exaggerate pros or hide cons
2. **Be specific** — Use actual specifications, not vague claims
3. **Be helpful** — Focus on what Nigerian buyers need to know
4. **Be current** — Update prices and availability regularly
5. **Disclose methodology** — Be clear about how you gathered information

### Buying Guides

- Address real Nigerian pain points
- Provide actionable advice
- Include cost estimates in Naira
- Link to relevant product reviews

### Blog Posts

- Write for the target audience (Nigerian homeowners, business owners)
- Keep language clear and accessible
- Include practical tips
- Update with current information

## 🔍 Review Process

### What We Look For

1. **Code quality** — Clean, readable, maintainable
2. **Functionality** — Does it work as intended?
3. **Testing** — Are there tests? Do they pass?
4. **Documentation** — Is it documented?
5. **Design** — Does it follow our guidelines?
6. **Performance** — Is it fast and efficient?
7. **Accessibility** — Is it accessible to all users?

### Review Timeline

- Initial review: Within 3-5 business days
- Follow-up: As needed
- Merge: Once approved

## 🚫 What We Don't Accept

- Spam or self-promotion
- Inappropriate content
- Code that breaks existing functionality
- Unnecessary dependencies
- Poorly tested code
- Undocumented breaking changes

## 💡 Questions?

Feel free to open an issue or contact the maintainers:

- **GitHub**: [@ericprince957-cloud](https://github.com/ericprince957-cloud)
- **Email**: hello@solarnaija.com

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thanks for helping make SolarNaija better! ☀️
