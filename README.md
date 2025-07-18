# Gamor

Gamor is a modern, modular game streaming platform built with React, TypeScript, and Vite. It enables users to discover, filter, and connect with game streamers, featuring a unique "stream party" experience.

## 🚀 Features

-   **Game Streaming Dashboard**: Discover and interact with streamers.
-   **Stream Party Platform**: Join or create collaborative streaming sessions.
-   **Authentication**: Secure login and registration flows.
-   **Streamer Discovery**: Filter streamers by platform and categories.
-   **Modern UI**: Responsive, themeable interface with dark/light mode.
-   **Form Validation**: Robust forms using React Hook Form and Zod.
-   **Trending Categories**: Explore popular game genres and streamers.

## 🛠️ Tech Stack

-   [React 19](https://react.dev/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Vite](https://vitejs.dev/)
-   [React Router](https://reactrouter.com/)
-   [React Hook Form](https://react-hook-form.com/)
-   [Zod](https://zod.dev/) (schema validation)
-   [Lucide React](https://lucide.dev/) (icons)
-   Custom CSS for theming and layout

## 📁 Project Structure

```
src/
  core/         # Shared utilities, UI, routing, theming, state
  modules/
    dashboard/  # Main dashboard and streamer discovery
    login/      # Login flow
    register/   # Registration flow
  assets/       # Static assets
  App.tsx       # App entry point
  main.tsx      # Vite entry point
```

## ⚡ Getting Started

### Prerequisites

-   Node.js (v18+ recommended)
-   npm or yarn

### Installation

```bash
git clone https://github.com/your-username/gamor.git
cd gamor
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## 🧪 Test Credentials

For demo/testing purposes, you can use the following credentials to log in:

```
Username: Gamer
Password: s3cur3p455w0rd
```

## ✨ Customization

-   **Theming**: Edit `src/core/theme/` for custom themes.
-   **Routing**: Update routes in `src/core/router/route.ts`.
-   **Streamer Logic**: Extend streamer features in `src/modules/dashboard/`.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

[MIT](LICENSE)
