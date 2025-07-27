import { useState, useRef } from "react";
import axios from "axios";
import { FiUpload, FiSend, FiDownload, FiCheckCircle } from "react-icons/fi";

const Main = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [downloadLink, setDownloadLink] = useState(null);

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.name.endsWith(".pptx")) {
      setSelectedFile(file);
      setMessage("");
      setDownloadLink(null);
    } else {
      alert("Пожалуйста, выберите файл в формате .pptx");
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Сначала выберите файл");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setUploading(true);
      setMessage("Загрузка презентации...");

      const response = await axios.post("http://localhost:8000/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { url, filename } = response.data;
      const fullUrl = `http://localhost:8000${url}`;

      setMessage(`Презентация "${filename}" успешно переработана!`);
      setDownloadLink(fullUrl);

      // Очистка формы
      setSelectedFile(null);
      fileInputRef.current.value = "";
    } catch (error) {
      console.error("Ошибка загрузки:", error);
      setMessage("Произошла ошибка при загрузке файла.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="w-full min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="flex flex-col items-center gap-6 p-6 bg-white rounded-2xl shadow-2xl max-w-md w-full">
        {/* Кнопка выбора файла */}
        <label
          htmlFor="upload"
          className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md flex items-center gap-2 transition-all duration-200"
        >
          <FiUpload className="text-xl" />
          Загрузить презентацию
        </label>

        <input
          id="upload"
          type="file"
          accept=".pptx"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Кнопка отправки */}
        {selectedFile && (
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-5 rounded-md shadow-md flex items-center gap-2 transition"
          >
            <FiSend className="text-lg" />
            {uploading ? "Загрузка..." : "Отправить"}
          </button>
        )}

        {/* Сообщение */}
        {message && (
          <p className="text-center text-gray-700 text-sm px-2 text-wrap">
            {message}
          </p>
        )}

        {/* Скачивание */}
        {downloadLink && (
          <div className="flex flex-col items-center gap-2 mt-4 border-t pt-4 w-full">
            <FiCheckCircle className="text-green-600 text-3xl" />
            <p className="text-green-700 font-medium text-sm">
              Ваша презентация готова!
            </p>
            <a
              href={downloadLink}
              download
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg shadow flex items-center gap-2 transition"
            >
              <FiDownload className="text-lg" />
              Скачать презентацию
            </a>
          </div>
        )}
      </div>
    </main>
  );
};

export default Main;