import { useState } from "react";

const Main = () => {
  const [selectedFile, setSelectedFile] = useState(null);

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

  return (
    <main className="w-full h-[80vh] flex items-center justify-center">
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
          <p className="text-sm text-gray-600">
            Выбран файл: <span className="font-medium">{selectedFile.name}</span>
          </p>
        )}
      </div>
    </main>
  );
};

export default Main;
