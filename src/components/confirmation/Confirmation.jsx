import React from 'react'
import './confirmation.css'

function Confirmation({ isOpen, onClose, onConfirm, message }) {
  return (
    <div>
        {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <p>{message}</p>
              <div className="modal-buttons">
                <button className="cancel-btn" onClick={onClose}>Cancel</button>
                <button className="confirm-btn" onClick={onConfirm}>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default Confirmation
