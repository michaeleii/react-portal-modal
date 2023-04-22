import { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="wrapper">
				<button onClick={() => setIsOpen(true)}>Open Modal</button>
				<Modal open={isOpen} onClose={() => setIsOpen(false)}>
					<h1>Hello</h1>
				</Modal>
			</div>
			<div className="other-content">Other Content</div>
		</>
	);
}

export default App;
