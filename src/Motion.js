import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="body">
      <motion.div
        className="container"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 1.8,
          rotate: -90,
          borderRadius: "100%",
        }}
      />
      <motion.div
        className="container"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 1.8,
          rotate: -90,
          borderRadius: "100%",
        }}
      />
    </div>
  );
}
export default App;
