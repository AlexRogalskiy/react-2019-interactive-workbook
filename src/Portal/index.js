import React, { useState } from "react"
import styles from "./Portal.module.scss"
import ModalContent from "./ModalContent"
import Modal from "./Modal"

const PortalExample = () => {
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => setShowModal(showModal => !showModal)

  return (
    <div className="widget-container">
      <div>
        <button onClick={toggleModal} className="button">
          show modal
        </button>
      </div>
      <div className={styles.modalContainer}>
        {showModal && (
          <Modal>
            <ModalContent toggleModal={toggleModal} />
          </Modal>
        )}
      </div>
    </div>
  )
}

export default PortalExample
