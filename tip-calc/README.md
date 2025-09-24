# 🧮 Tip Calculator (Enhanced)

Bill split with custom tip, **live updates**, and **dark/light theme**.  
Vanilla **HTML/CSS/JS** with Swiss currency formatting (**CHF**, `de-CH`).

---

## 🚀 Live Demo  
[https://tip-calculator-srof.onrender.com](https://tip-calculator-1gsj.onrender.com)

---

## ✨ Features
- **Live compute** (debounced 150ms) while typing
- **Dark/Light toggle** (persisted via `localStorage`, overrides system)
- **Input persistence** (`bill`, `rate`, `people`) via `localStorage`
- **Select-all on focus** for number inputs (desktop-friendly)
- **Total (bill + tip)**, **Tip only**, **Tip per person**, **Total per person**  
  (per-person rows auto-hide when `people = 1`)
- Clear **validation** & focus to first invalid field  
  (order: **NaN → bounds** for precise messages)
- **Accessible**: labels, `aria-live` results, `aria-invalid` on errors
- **Responsive** layout
- Respects **prefers-reduced-motion**

---

## 📸 Screenshot  
<img width="342" height="517" alt="image" src="https://github.com/user-attachments/assets/21ffc797-2cf0-488d-970e-7e51402d614b" />

---

## ⚙️ How it works
- Parsing via `valueAsNumber`; fallback: replace **`,` -> `.`** before `Number(...)`.
- Formatting with:
  ```js
  new Intl.NumberFormat('de-CH', { style: 'currency', currency: 'CHF' });
- Guard-clause validation and UI updates via `updateUI(result, people)`.
- **Theme API**
  - Classes on `<body>`: `theme-dark` / `theme-light`
  - Saved under `tc:theme` in `localStorage`
- **Input persistence keys:** `tc:bill`, `tc:rate`, `tc:people`

---

## ♿ Accessibility notes
- Single live region: `#results` with `aria-live="polite"` and `aria-atomic="true"`.
- Invalid fields receive `aria-invalid="true"` + visible error border.
- Focus moves to the first invalid input on submit.

---

## ▶️ Run locally
- Open `index.html` directly in a browser, or use VS Code **Live Server**.

---

## 🌍 Locale (CH)
- Accepts decimal comma input (`,`), displays amounts in **CHF** with Swiss German formatting.

---

## 🚀 Deploy on Render (Static Site)
- **Repository:** this branch (`enhanced`)
- **Build Command:** _none_
- **Publish Directory:** `tip-calc`
- *(Optional)* Add a custom domain later; no rewrites needed (not an SPA).

---

## 📁 Structure
tip-calc/
├─ index.html
├─ style.css
├─ app.js
└─ README.md

---

## ⚠️ Known limitations / Next steps
- No **rappen rounding** yet -> minor float artifacts possible.
- Future: cent-based math, unit tests (Vitest), CI (ESLint/Prettier).
- Optional: replace emoji toggle with **SVG icon** for consistent coloring.

---

## 🔒 Security / robustness
- No `innerHTML` usage; DOM updates via `textContent`.
- Storage calls wrapped in `try/catch` to handle quota/privacy modes.

---

## 🧠 What I practiced
- Live UI updates with **debounce** and clean state handling.
- Progressive enhancement: theme, persistence, and a11y layered on a simple core.
- Internationalization with `Intl.NumberFormat`.

---

## 🛠️ Tech Stack
- HTML5 (Semantic)
- CSS3 (Flexbox)
- JavaScript (ES6)

---

## 📂 Folder Structure
tip-calc/
├── index.html
├── style.css
├── app.js
├── README.md
└── image.png

---

## 🧠 Lessons Learned
- DOM manipulation with `querySelector` and `addEventListener`
- Number input validation
- Reusable functions and clean UI feedback

