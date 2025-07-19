import React, { useState } from "react";
import Field from "./Field";

const App = () => {
  const [fields, setFields] = useState([]);

  const handleAddField = () => {
    setFields((prev) => [
      ...prev,
      {
        id: Date.now(),
        key: "",
        type: "string",
        required: false,
        children: [],
      },
    ]);
  };

  const handleFieldChange = (index, updatedField) => {
    setFields((prev) => {
      const newFields = [...prev];
      newFields[index] = updatedField;
      return newFields;
    });
  };

  const handleRemoveField = (index) => {
    setFields((prev) => {
      const newFields = [...prev];
      newFields.splice(index, 1);
      return newFields;
    });
  };

  const generateJSONInOrder = (items) => {
    const ordered = {};
    items.forEach((item) => {
      if (!item.key) return;
      ordered[item.key] =
        item.type === "nested"
          ? generateJSONInOrder(item.children || [])
          : item.type.toUpperCase();
    });
    return ordered;
  };

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      {/* Left: Form */}
      <div style={{ flex: 1, paddingRight: "20px", borderRight: "1px solid #ddd" }}>
        {fields.map((field, index) => (
          <Field
            key={field.id}
            field={field}
            updateField={(updatedField) => handleFieldChange(index, updatedField)}
            removeField={() => handleRemoveField(index)}
          />
        ))}
        <button
          onClick={handleAddField}
          style={{
            marginTop: "10px",
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "8px",
            borderRadius: "4px",
            border: "none",
          }}
        >
          + Add Item
        </button>
      </div>

      {/* Right: JSON Preview */}
      <div style={{ flex: 1, paddingLeft: "20px" }}>
        <h3>JSON Preview:</h3>
        <pre>{JSON.stringify(generateJSONInOrder(fields), null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
