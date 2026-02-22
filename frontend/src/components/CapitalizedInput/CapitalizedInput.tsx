import { useState } from "react";
import type { ChangeEvent } from "react";
import { generateStockReport } from "../../services/reportsApi";
import "./CapitalizedInput.css";

const CapitalizedInput = () => {
  const [value, setValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    input = input.replace(/[^a-zA-Z]/g, "");
    input = input.toUpperCase();
    setValue(input);

    // Clear error while typing
    if (input.trim() !== "") {
      setError("");
    }
  };

  const handleSubmit = async () => {
    if (loading) return;

    if (!value.trim()) {
      setError("Field cannot be empty.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      // Make API call to Spring Boot backend
      const res = await generateStockReport(value);
      console.log(res);
    } catch (error) {
      setError("API call failed.");
    } 
    finally {
      setLoading(false); // 🔓 Unlock button (always runs)
    }
  };

  return (
    <div className="container">
      <div className="form-row">
        <div className="input-wrapper">
          <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter ticker symbol"
          className="input-field"
          />
          {error && <p className="error-text">{error}</p>}
        </div>
        <button
          type="button"
          onClick={loading ? undefined : handleSubmit}
          disabled={loading}
          className="submit-btn"
        >
          {loading ? "Loading..." : "Generate Report"}
        </button>
      </div>
    </div>
  );
};

export default CapitalizedInput;