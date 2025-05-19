import type { ModalProps } from "../interfaces"

export function Modal({ isOpen, onClose, title, children }: ModalProps) {

    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                <div className="modal-container">
                    {title && <h2 className="modal-title">{title}</h2>}
                    <div className="modal-content">{children}</div>
                </div>
            </div>
        </div>
    )
}