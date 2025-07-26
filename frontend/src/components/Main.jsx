import { useState } from "react";

const Main = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");



  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.name.endsWith(".pptx")) {
      setSelectedFile(file);
      // Тут в будущем можно отправить файл на бэкенд
      console.log("Выбран файл:", file.name);
    } else {
      alert("Пожалуйста, загрузите .pptx файл");
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
      setMessage("Загрузка файла...");

      const response = await axios.post("http://localhost:8000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob", // если хочешь получить файл в ответ
      });

      setMessage("Файл успешно загружен и обработан!");

      // 🎁 Скачать файл, если сервер вернул его в ответ
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "updated_presentation.pptx");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Ошибка при загрузке:", error);
      setMessage("Ошибка при загрузке файла");
    } finally {
      setUploading(false);
    }
  };



  return (
    <main className="w-full h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <label
          htmlFor="upload"
          className="cursor-pointer bg-blue-300 hover:bg-pink-300 hover:text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-200"
        >
          Загрузить презентацию
        </label>
        <input
          id="upload"
          type="file"
          accept=".pptx"
          onChange={handleFileChange}
          className="hidden"
        />
        {selectedFile && (
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md shadow-md transition"
          >
            Отправить файл
          </button>
        )}
        {message && <p className="text-gray-700">{message}</p>}
      </div>
    </main>
  );
};

export default Main;
