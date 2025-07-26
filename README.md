# 🖼️ Fresh presentation

**Fresh presentation** is a web-based tool that allows users to upload their old PowerPoint presentations (`.pptx`), and receive a redesigned version in a modern, clean style.

---

## ✨ Features

- Upload `.pptx` presentations through a simple and elegant web interface.
- Automatically applies a consistent style to all slides (in development).
- Download the updated presentation instantly.
- Built with modern technologies: **React**, **Tailwind CSS**, **FastAPI**.

---

## 📂 Project Structure

```

project-root/
├── frontend/           # Vite + React + Tailwind CSS
│   └── ...             # Upload UI
├── backend/            # FastAPI server
│   ├── main.py         # Upload endpoint
│   ├── uploads/        # Uploaded presentations
│   └── processed/      # Styled presentations to return
└── README.md

````

---

## 🚀 Tech Stack

### Frontend
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

### Backend
- [FastAPI](https://fastapi.tiangolo.com/)
- [Uvicorn](https://www.uvicorn.org/)
- [python-pptx](https://python-pptx.readthedocs.io/) (coming soon)

---

## 🔧 How to Run Locally

### Backend

```bash
cd backend
pip install -r requirements.txt  # Create a requirements.txt if needed
uvicorn main:app --reload --port 8000
````

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Make sure both servers are running at the same time.

---

## 📥 Upload Flow

1. User selects a `.pptx` file on the frontend.
2. The file is sent to the FastAPI backend using `multipart/form-data`.
3. The backend stores and (in future) processes the file.
4. Processed file is returned for immediate download.

---

## 🛣️ Roadmap

* [x] Basic file upload + download
* [ ] Apply modern template and unified styling
* [ ] Drag & Drop upload support
* [ ] User accounts and file history
* [ ] Support for `.ppt` and `.odp` formats
* [ ] Hosted version + deployment

---

## 📄 License

MIT License

---

## 🤝 Contributing

Pull requests and ideas are welcome! Feel free to open an issue if you want to suggest something or report a bug.

---

## 🙌 Author

Made with ❤️ by Tim