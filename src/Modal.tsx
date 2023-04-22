import ReactDOM from "react-dom";

function Modal({
	open,
	onClose,
	children,
}: {
	open: boolean;
	onClose: () => void;
	children: React.ReactNode;
}) {
	if (!open) return null;
	return ReactDOM.createPortal(
		<div className="overlay">
			<div className="modal">
				<button onClick={onClose}>Close Modal</button>
				{children}
			</div>
		</div>,
		document.getElementById("portal") as HTMLElement
	);
}
export default Modal;
