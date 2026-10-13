# Contributing to Developer Productivity Tracker

Thank you for your interest in contributing to **Developer Productivity Tracker**! 🎉

We welcome contributions of all kinds: bug fixes, new features, documentation improvements, performance enhancements, and UI polish.

---

## 📋 Code of Conduct

Please be respectful, constructive, and collaborative in all discussions and pull requests.

---

## 🛠️ Development Setup

### 1. Fork & Clone
```bash
git clone https://github.com/<your-username>/dev-productivity-tracker.git
cd dev-productivity-tracker
```

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your PostgreSQL credentials & GitHub Personal Access Token
# Initialize database tables using src/config/init.sql
npm run dev
```

### 3. Mobile App Setup
```bash
cd ../mobile
npm install
# Update mobile/src/services/apiClient.ts with your backend server URL
npx expo start
```

---

## 📐 Engineering Guidelines & Architecture Rules

This repository enforces strict engineering rules:

1. **Modular Architecture**:
   - `modules/`: Feature-scoped business logic, state, and UI.
   - `services/`: Network, API clients, and external integrations.
   - `shared/`: Generic helpers, theme tokens, constants, and reusable types.
   - ❌ Cross-module direct dependencies are forbidden. All shared utilities must live in `shared/`.

2. **TypeScript & Type Safety**:
   - Strict mode is enabled (`"strict": true`).
   - ❌ `any`, `unknown`, `@ts-ignore`, and `@ts-expect-error` are strictly disallowed.
   - All models and constants must be typed with domain constants (`as const`).

3. **State Management**:
   - Only native React state (`useState`, `useReducer`, `useContext`) is allowed.
   - ❌ Do not introduce external state libraries (Redux, Zustand, MobX) without prior discussion.

4. **Linting & Code Formatting**:
   - All code must pass linting without warnings before opening a PR:
     ```bash
     # In backend/
     npm run lint

     # In mobile/
     npm run lint
     ```

---

## 🚀 Submitting a Pull Request

1. **Branch Naming**:
   - `feat/<feature-name>` for new features
   - `fix/<bug-description>` for bug fixes
   - `docs/<change-summary>` for documentation updates
   - `refactor/<target-name>` for refactoring

2. **Commit Messages**:
   - Follow standard semantic commit guidelines:
     - `feat: add PR review cycle metrics`
     - `fix: resolve date parsing in timezone offset`
     - `docs: update API setup guide in README`

3. **Pull Request Checklist**:
   - [ ] Backend TypeScript compiles with `npm run build`
   - [ ] Linter checks pass in both `backend` and `mobile`
   - [ ] Clean git commit history without merge conflicts
   - [ ] No hardcoded secrets or tokens committed

Thank you for building with us! ❤️
