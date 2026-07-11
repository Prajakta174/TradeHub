import "./ProfileImageModal.css";

const ProfileImageModal = ({ preview, onClose, onUpload, uploading }) => {
  return (
    <div className="image-modal-overlay">
      <div className="image-modal">
        <h2>Update Profile Photo</h2>

        <img src={preview} alt="Preview" className="preview-avatar" />

        <div className="image-modal-buttons">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button className="save-btn" onClick={onUpload} disabled={uploading}>
            {uploading ? "Uploading..." : "Save Photo"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileImageModal;
