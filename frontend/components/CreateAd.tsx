'use client'

import React, { useState } from "react";

export const CreateAdModal = ({handleClose} : {handleClose: () => void}) => {
  const [formData, setFormData] = useState({
    image: "",
    size: "",
    health: "",
    type: "",
    name: "",
    age: "",
    breed: "",
    color: "",
    description: "",
    additionalImages: [] as string[],
  });

  const encodeMainImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setFormData((prev) => ({ ...prev, image: base64 }));
    };
    reader.readAsDataURL(file);
  };

  const handleAdditionalImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;

    const remainingSlots = 3 - formData.additionalImages.length;
    const filesToProcess = files.slice(0, remainingSlots);

    filesToProcess.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setFormData((prev) => ({
          ...prev,
          additionalImages: [...prev.additionalImages, base64],
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveAdditionalImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      additionalImages: prev.additionalImages.filter((_, i) => i !== index),
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-40 flex justify-center items-center z-2000">
      <div className="bg-[#D9A4A9] relative rounded-[20px] p-6 w-[900px] shadow-lg max-h-[90vh] overflow-y-auto">
        <h2 className="text-white text-2xl font-bold text-center mb-6">
          Створити оголошення
        </h2>
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white text-[36px] hover:text-gray-200"
        >
          ✕
        </button>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-white mb-1">Додайте головне фото:</label>
            
            <div className="w-full h-[160px] bg-[#EFDADA] rounded-xl mb-4 flex items-center justify-center">
              {formData.image ? (
                <div className="relative w-fit">
                  <img
                    src={formData.image}
                    alt="main"
                    className="max-h-[160px] object-contain rounded-xl"
                  />
                  <button
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, image: "" }))
                    }
                    className="absolute top-1 right-1 bg-white text-red-500 rounded-full p-1"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <label className="text-sm text-gray-600 cursor-pointer">
                  Завантажити зображення
                  <input
                    type="file"
                    accept="image/*"
                    onChange={encodeMainImage}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            <label className="block text-white mb-1">Розмір</label>
            <input
              name="size"
              value={formData.size}
              onChange={handleInputChange}
              className="w-full rounded-xl px-4 py-2 bg-[#EFDADA] outline-none mb-4"
            />

            <label className="block text-white mb-1">Стан здоров’я</label>
            <select
              name="health"
              value={formData.health}
              onChange={handleInputChange}
              className="w-full rounded-xl px-4 py-2 bg-[#EFDADA] outline-none mb-4"
            >
              <option value="">Оберіть стан</option>
              <option>Повністю здоровий(а)</option>
              <option>Потребує лікування / на реабілітації</option>
              <option>З хронічними захворюваннями</option>
              <option>Інвалідність / особливі потреби</option>
            </select>

            <label className="block text-white mb-1">Додаткові фото (до 3)</label>
            <div className="w-full min-h-[120px] bg-[#EFDADA] rounded-xl p-2 grid grid-cols-3 gap-3 items-center justify-center">
              {formData.additionalImages.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={img}
                    alt={`additional-${index}`}
                    className="h-[100px] w-full object-cover rounded-md"
                  />
                  <button
                    onClick={() => handleRemoveAdditionalImage(index)}
                    className="absolute top-1 right-1 bg-white text-red-500 rounded-full p-1"
                  >
                    ✕
                  </button>
                </div>
              ))}
              {formData.additionalImages.length < 3 && (
                <label className="cursor-pointer flex items-center justify-center h-[100px] w-full bg-[#DCCCCC] rounded-md text-sm text-gray-700 text-center">
                  +
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleAdditionalImages}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          <div>
            <label className="block text-white mb-1">Вид тваринки</label>
            <input
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full rounded-xl px-4 py-2 bg-[#EFDADA] outline-none mb-3"
            />

            <label className="block text-white mb-1">Ім’я</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full rounded-xl px-4 py-2 bg-[#EFDADA] outline-none mb-3"
            />

            <label className="block text-white mb-1">Вік</label>
            <input
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full rounded-xl px-4 py-2 bg-[#EFDADA] outline-none mb-3"
            />

            <label className="block text-white mb-1">Порода</label>
            <input
              name="breed"
              value={formData.breed}
              onChange={handleInputChange}
              className="w-full rounded-xl px-4 py-2 bg-[#EFDADA] outline-none mb-3"
            />

            <label className="block text-white mb-1">Колір шерсті</label>
            <input
              name="color"
              value={formData.color}
              onChange={handleInputChange}
              className="w-full rounded-xl px-4 py-2 bg-[#EFDADA] outline-none mb-3"
            />

            <label className="block text-white mb-1">Детальний опис</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full rounded-xl px-4 py-2 bg-[#EFDADA] outline-none h-[100px]"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={() => console.log(formData)}
            className="bg-[#FF784F] text-white px-6 py-2 rounded-xl hover:bg-[#e56842] transition"
          >
            Створити оголошення
          </button>
        </div>
      </div>
    </div>
  );
};
