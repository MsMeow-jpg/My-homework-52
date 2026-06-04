function ConfirmModal({ title, message, confirmText, cancelText, onConfirm, onCancel }) {
  return (
    <div className="modal-backdrop">
      <div className="confirm-modal">
        <h2>{title}</h2>
        <p>{message}</p>

        <div className="confirm-actions">
          <button type="button" onClick={onCancel}>
            {cancelText}
          </button>

          <button type="button" className="delete-button" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;