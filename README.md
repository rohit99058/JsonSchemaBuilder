# 🧱 JSON Schema Builder (React)

A dynamic React-based tool to visually build JSON schemas with nested support and live preview.

## 🚀 Features

- Add/edit/remove fields
- Nested fields (recursive)
- Types: `string`, `number`, `boolean`, `nested`
- Toggle "required" field
- Real-time JSON preview

## 🛠️ Tech Stack

- React (Hooks)
- Inline CSS
- `react-icons`

## 📦 Project Structure

├── src
│ ├── App.js # Main logic + preview
│ └── Field.js # Recursive field builder


## ▶️ Getting Started

```bash
git clone https://github.com/rohit99058/JsonSchemaBuilder.git
cd JsonSchemaBuilder
npm install
npm start

Visit: http://localhost:3000

📤 Output Example

{
  "name": "STRING",
  "details": {
    "age": "NUMBER",
    "isActive": "BOOLEAN"
  }
}

👨‍💻 Author
Made with ❤️ by Rohit Kumar