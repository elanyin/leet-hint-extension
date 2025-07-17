````markdown
# 🧠 LeetHint - Chrome Extension for LeetCode AI Hints

LeetHint is a lightweight Chrome Extension that integrates with the LeetCode problem page and uses Gemini API to generate AI-powered solution **hints** — not full answers — to help users learn how to approach coding problems.

---

## ✅ Features (Already Done)

- 🔍 Detects the currently opened LeetCode problem and extracts:
  - Problem **title**
  - Problem **description**
- 🧠 Sends the problem data to **Gemini API** (`gemini-1.5-flash`) and receives helpful **solving hints**.
- 📤 Hints are displayed in the extension popup after clicking the **Generate** button.
- 🔗 Simple, clean UI with `popup.html` interface.
- 🧪 Fully working communication pipeline:
  - Popup ➜ Content Script ➜ Background ➜ Gemini ➜ Return Result ➜ Popup Display

---

## 🚧 TODO (Planned Features)

- 💾 **Hint caching** to `chrome.storage.local` for faster repeat queries
- 💡 **Hint formatting** with bold, line breaks, and multiple hint types
- 🌐 **Bilingual display**: English + 中文解释
- ⏳ **Loading animation** while waiting for AI response
- 📌 **Inline page hints** (inject hints directly below the problem title)
- 📈 **History tracking**: Save a list of previously queried problems
- ⚙️ **Settings page**: Customize hint type, language, and API model
- 🧪 **Unit tests** for core scripts

---

## 🧰 Tech Stack

| Layer            | Tech Used                          |
|------------------|------------------------------------|
| Frontend (UI)    | HTML + CSS                         |
| Extension Logic  | JavaScript (ES6), Chrome API       |
| AI Integration   | Google Gemini 1.5 Flash API        |
| DOM Parsing      | `document.querySelector()`         |

---

## 🧩 Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/LeetHint.git
   cd LeetHint
````

2. Go to `chrome://extensions/` in your browser.

3. Enable **Developer Mode** (top right).

4. Click **Load unpacked** and select this project folder.

5. You’ll see 🧠 LeetHint appear in your toolbar.

---

## 🚀 Usage

1. Open a problem page on [LeetCode](https://leetcode.com/problems/).
2. Click the 🧠 LeetHint icon in the Chrome toolbar.
3. Click **Generate Hint**.
4. Wait a few seconds... hints will be displayed!

---

## 📸 Screenshot


---

## 🔑 Notes

* You need to provide your **Google Gemini API Key** in `background.js`:

  ```js
  const API_KEY = 'your-api-key';
  ```
* Make sure you **do not expose your key** if pushing to public GitHub.

---

## 📜 License

MIT License

---

## 🙋‍♂️ Author

Built with ❤️ by [Elan Yin](https://github.com/elanyin)

