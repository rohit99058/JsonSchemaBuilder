import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Field = ({ field, updateField, removeField }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateField({
      ...field,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleAddChild = () => {
    const newChild = {
      id: Date.now(),
      key: "",
      type: "string",
      required: false,
      children: [],
    };
    updateField({
      ...field,
      children: [...(field.children || []), newChild],
    });
  };

  const updateChildField = (index, updatedChild) => {
    const updatedChildren = [...field.children];
    updatedChildren[index] = updatedChild;
    updateField({
      ...field,
      children: updatedChildren,
    });
  };

  const removeChildField = (index) => {
    const updatedChildren = [...field.children];
    updatedChildren.splice(index, 1);
    updateField({
      ...field,
      children: updatedChildren,
    });
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <input
          name="key"
          type="text"
          placeholder="Key"
          value={field.key}
          onChange={handleChange}
          style={{ padding: '5px', width: '150px' }}
        />
        <select
          name="type"
          value={field.type}
          onChange={handleChange}
          style={{ padding: '5px' }}
        >
          <option value="string">string</option>
          <option value="number">number</option>
          <option value="boolean">boolean</option>
          <option value="nested">nested</option>
        </select>

        <label style={{ position: 'relative', width: 40, height: 20, display: 'inline-block' }}>
          <input
            name="required"
            type="checkbox"
            checked={field.required}
            onChange={handleChange}
            style={{
              width: 40,
              height: 20,
              appearance: 'none',
              backgroundColor: field.required ? '#4ade80' : '#ccc',
              borderRadius: '20px',
              outline: 'none',
              cursor: 'pointer',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
          <span
            style={{
              width: 16,
              height: 16,
              backgroundColor: '#fff',
              borderRadius: '50%',
              position: 'absolute',
              top: 2,
              left: field.required ? 22 : 4,
              transition: 'left 0.2s ease'
            }}
          />
        </label>

        <FaTimes
          onClick={removeField}
          style={{ cursor: 'pointer', color: '#f43f5e', fontSize: '1.2rem' }}
        />
      </div>

      {field.type === "nested" && (
        <div style={{ paddingLeft: '20px' }}>
          {field.children.map((child, index) => (
            <Field
              key={child.id}
              field={child}
              updateField={(updatedChild) => updateChildField(index, updatedChild)}
              removeField={() => removeChildField(index)}
            />
          ))}
          <button
            onClick={handleAddChild}
            style={{
              marginTop: "5px",
              backgroundColor: "#10b981",
              color: "white",
              padding: "4px 8px",
              borderRadius: "4px",
              border: "none",
              fontSize: "0.85rem"
            }}
          >
            + Add Child
          </button>
        </div>
      )}
    </div>
  );
};

export default Field;
