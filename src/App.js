import "./App.css";
import { ReactTable } from "./components/ReactTable";
import HeadingContent from "./components/HeadingContent";
function App() {
	return (
		<div className="App">
			{/* HeadingContent Component */}
			<HeadingContent />

			{/* ReactTable Component */}
			<ReactTable />
		</div>
	);
}

export default App;
