import { useState } from "react";

export const useAdminLayout = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleCloseModal = () => setIsOpenModal(false);
    const handleOpenModal = () => setIsOpenModal(true);

    return {
        isOpenModal,
        handleCloseModal,
        handleOpenModal
    }
}