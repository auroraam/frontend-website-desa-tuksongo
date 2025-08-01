import { useState } from "react";

const PassPopUp = ({ onClose, onConfirm, visible }) => {
  const [inputPassword, setInputPassword] = useState("");

  const handleSubmit = () => {
    if (inputPassword === process.env.NEXT_PUBLIC_APPROVE_PASSWORD) {
      onConfirm(); // aksi seperti approve atau delete
      setInputPassword("");
    } else {
      alert("Password salah!");
    }
    onClose(); // menutup modal
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[var(--biru)] p-6 rounded shadow-md w-80 text-white">
        <h2 className="text-lg font-semibold mb-4">Masukkan Password</h2>
        <input
          type="password"
          className="w-full border border-gray-300 p-2 rounded mb-4 text-black"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-[var(--biru)] text-white cursor-pointer border"
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-[var(--biru)] text-white cursor-pointer border"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassPopUp;
