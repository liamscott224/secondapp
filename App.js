import "./App.css";
import Header from "./components/Header";  
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {

  return (
    <div className="container">
      <Header />
      <FeedbackProvider>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </FeedbackProvider>
    </div>
  );
}

export default App;

