# vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

# package.json

```json
{
  "name": "styling",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.14",
    "@types/react-dom": "^18.2.6",
    "@vitejs/plugin-react": "^4.0.1",
    "eslint": "^8.44.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.1",
    "vite": "^4.4.0"
  }
}

```

# index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/gif" href="/lo.gif" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ReactPanty</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
      rel="stylesheet"
    />
  </head>
  <body class="p-8">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

# README.md

```md
# UR-S6 Work

1. URS6 Work

a

```

# .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

# .eslintrc.cjs

```cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

```

# src/main.jsx

```jsx
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

```

# src/index.css

```css
* {
  box-sizing: border-box;
}

html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body {
  /* Taken from SVGBackgrounds.com */
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}

button {
  cursor: pointer;
  background: none;
  line-height: inherit;
}

button:focus {
  outline: none;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

header img {
  object-fit: contain;
  border-radius: 100px;
  margin-bottom: 2rem;
  width: 11rem;
  height: 11rem;
  transition: transform 1.5s ease-in-out;
  cursor: pointer;
}

header img:hover {
  transform: scale(2);
}
header h1 {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.4em;
  text-align: center;
  text-transform: uppercase;
  color: #9a3412;
  font-family: "Pacifico", cursive;
  margin: 0;
}

header p {
  text-align: center;
  color: #a39191;
  margin: 0;
}

@media (min-width: 768px) {
  header {
    margin-bottom: 4rem;
  }

  header h1 {
    font-size: 2.25rem;
  }
}

#auth-inputs {
  width: 100%;
  max-width: 28rem;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: linear-gradient(180deg, #474232 0%, #28271c 100%);
  color: white;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.controls label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6b7280;
}

.controls input {
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: #d1d5db;
  color: #374151;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

label.invalid {
  color: #f87171;
}

input.invalid {
  color: #ef4444;
  border-color: #f73f3f;
  background-color: #fed2d2;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.button {
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;
}

.button:hover {
  background-color: #f0920e;
}

.text-button {
  color: #f0b322;
  border: none;
}

.text-button:hover {
  color: #f0920e;
}

```

# src/App.jsx

```jsx
import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  );
}

```

# public/vite.svg

This is a file of the type: SVG Image

# public/logo.png

This is a binary file of the type: Image

# public/lo.gif

This is a binary file of the type: Image

# me/vs.txt

```txt
// Prettier , Indent Rainbow , Error Lens, Color , Typescript , Icons , Obsidian Theme , Mayuki theme, Import Cost , ES7 React Snippets, Vuln Cost - Security Scanner
  "workbench.list.smoothScrolling": true,
  "editor.smoothScrolling": true,
  "terminal.integrated.smoothScrolling": true,
  "editor.renderWhitespace": "all",
  "editor.guides.bracketPairs": "active",
  "editor.lineHeight": 2,
  "editor.fontSize": 17,
  "editor.fontFamily": "GoMono Nerd Font",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "files.autoSave": "onFocusChange",
  "editor.cursorSmoothCaretAnimation": "on",
  "workbench.iconTheme": "simple-icons",
  "editor.stickyScroll.enabled": true,
  "terminal.integrated.cursorWidth": 2,
  "editor.cursorBlinking": "expand",
  "workbench.colorTheme": "Obsidian Dark",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "terminal.integrated.lineHeight": 1.5,
  "terminal.integrated.fontFamily": "FiraCode Nerd Font Mono",
  "terminal.integrated.fontSize": 15
}
```

# me/sn.txt

```txt
"Print to console": {
	"scope": "javascript,typescript",
	"prefix": "cl",
	"body": [
		"console.log();",
	],
	"description": "Log output to console"
},
"Console Table": {
	"scope": "javascript,typescript",
	"prefix": "clt",
	"body": [
		"console.table();",
	],
	"description": "Console Log Table"
}
```

# me/g1s.txt

```txt
// Settings for github1s  - Use Best Themes Redefined

{
    "workbench.colorTheme": "Tokyo Night Dark",
    "workbench.list.smoothScrolling": true,
    "editor.smoothScrolling": true,
    "terminal.integrated.smoothScrolling": true,
    "editor.renderWhitespace": "all",
    "editor.guides.bracketPairs": "active",
    "editor.lineHeight": 2,
    "editor.fontSize": 17,
    "editor.fontFamily": "GoMono Nerd Font"
}
```

# src/components/Header.jsx

```jsx
import logo from "../assets/lo.gif";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactPanty</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}

```

# src/components/AuthInputs.jsx

```jsx
import { useState } from 'react';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <div className="controls">
        <p>
          <label>Email</label>
          <input
            type="email"
            className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className='button' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}

```

# src/assets/logo.png

This is a binary file of the type: Image

# src/assets/lo.gif

This is a binary file of the type: Image

