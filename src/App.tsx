import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConsentForm from "./googleAnalytics/ConsentAnalytics";
import Home from "./pages/Home";
import { options } from "./googleAnalytics/options";

// Begin work in ./pages/Home.tsx
function App() {
  return (
    <>
      <ConsentForm options={options} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
