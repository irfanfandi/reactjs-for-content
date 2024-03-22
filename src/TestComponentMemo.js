import { memo, useCallback, useMemo, useState } from "react";
import Input from "./Input";

function App() {
  const [state, setstate] = useState(1);
  const [value, setvalue] = useState(null);
  const [value1, setvalue1] = useState(null);

  return (
    <div>
      <Input
        value={value}
        object={{ dsds: "dsds" }}
        onChange={useCallback(
          (e) => {
            setvalue(e.target.value);
          },
          [setvalue]
        )}
      />

      <Input
        value={value1}
        onChange={useCallback(
          (e) => {
            setvalue1(e.target.value);
          },
          [setvalue1]
        )}
      />

      <button
        onClick={() => {
          setstate((e) => e + 1);
        }}
      >
        Button
      </button>
    </div>
  );
}
export default App;
