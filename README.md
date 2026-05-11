

# Weather App

A simple and responsive weather application that shows real-time weather information using a weather API.

---

## 🌐 Live Demo

[View Live Demo](https://weather-app-2-kts3.onrender.com/)

## 🚀 Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/suyashx04/Weather-App.git
```

### 2. Navigate to the Project Folder

```bash
cd Weather-App
```

### 3. Install Dependencies

Make sure you have Node.js installed, then run:

```bash
npm install
```

### 4. Add Your API Key

Create a `.env` file in the root directory and add:

```env
REACT_APP_WEATHER_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual weather API key.

---

## ▶️ Start the Application

If the project uses Create React App:

```bash
npm start
```

If the project uses Vite:

```bash
npm run dev
```

---

## 🌐 Open in Browser

For Create React App:

```text
http://localhost:3000
```

For Vite:

```text
http://localhost:5173
```

---

## 🛠 Requirements

- Node.js (v18 or later recommended)
- npm (comes with Node.js)

Check installation:

```bash
node -v
npm -v
```

---

## 📁 Environment Variables

| Variable | Description |
|----------|-------------|
| API_KEY | Your weather API key |

---

## ❗ Troubleshooting

### npm install fails
- Make sure Node.js is installed correctly.
- Delete `node_modules` and reinstall:

```bash
rm -rf node_modules
npm install
```

### API key not working
- Ensure the `.env` file is in the project root directory.
- Restart the development server after editing `.env`.

### Port already in use
- Close the process using the port or change the port configuration.

---

## 📝 Quick Setup Commands

```bash
git clone https://github.com/suyashx04/Weather-App.git
cd Weather-App
npm install
npm start
```
