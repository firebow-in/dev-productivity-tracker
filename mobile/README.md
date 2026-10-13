# 📱 Developer Productivity Tracker — Mobile Application

The official cross-platform mobile client for **Developer Productivity Tracker**, built with **React Native**, **Expo SDK 54**, and **TypeScript**.

---

## ✨ Features

- **Dashboard**: Real-time velocity metrics, interactive bezier commit trend charts, top contributor highlight, and productivity leaderboard.
- **Activity Feed**: Live commit activity timeline with dynamic filtering (7 days, 30 days, all time) and human-readable time-ago labels.
- **Developer Directory**: Searchable contributor directory with individual commit records.
- **Profile Screen**: User stats overview and manual sync triggers.
- **Theme Support**: Seamless Dark Mode & Light Mode integration via React Navigation.

---

## 🏗️ Architecture

Following strict modular feature rules:

```
src/
├── modules/
│   ├── activity/        # Activity feed screen, hooks, services & styles
│   ├── dashboard/       # Charts, metrics cards & leaderboard
│   ├── developers/      # Searchable contributors list & hooks
│   └── profile/         # User profile & sync controls
├── navigation/          # Bottom tab navigator & stack navigators
├── services/            # Axios API client configured for backend communication
└── shared/              # Reusable context (MetricsContext), hooks, and date utils
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Backend API Endpoint

Open `src/services/apiClient.ts` and ensure `baseURL` points to your running backend server:

```typescript
import axios from 'axios';

// Replace with your local machine's IP address (e.g. 192.168.x.x) for physical devices / Expo Go,
// or http://10.0.2.2:3000 for Android Emulator, or http://localhost:3000 for iOS Simulator / Web.
export const apiClient = axios.create({
  baseURL: 'http://<YOUR_LOCAL_IP>:3000',
});
```

### 3. Start Expo Development Server

```bash
npx expo start
```

Press:
- `a` to open on **Android Emulator**
- `i` to open on **iOS Simulator**
- `w` to open in **Web Browser**
- Scan QR code with the **Expo Go** app on your physical phone!

---

## 🧪 Linting & Quality Checks

```bash
npm run lint
```
