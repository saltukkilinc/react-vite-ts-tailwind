import React, { useState } from "react";
import ModalSheet from "./modalSheet";

const ModalSheetPage = () => {
  const [isModalSheetOpen, setIsModalSheetOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalSheetOpen(!isModalSheetOpen)} className="bg-purple-400 text-white focus:border border-red-500 p-4 rounded-full">
        {isModalSheetOpen ? "Close" : "Open"} Modal Sheet
      </button>
      <ModalSheet
        isOpen={isModalSheetOpen}
        onClose={() => setIsModalSheetOpen(false)}
        modalSheetHeight={600}
      />
    </div>
  );
};

export default ModalSheetPage;
