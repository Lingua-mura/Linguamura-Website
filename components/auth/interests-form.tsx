"use client";
import { Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';

interface FormData {
  selectedItems: string[];
}

const availableItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

const MultipleSelectForm = () => {
  // Change the state to hold multiple selections
  const [formData, setFormData] = useState<FormData>({ selectedItems: [] });

  // Update the handler to add/remove items from the selectedItems array
  const handleItemChange = (item: string) => {
    setFormData(prevState => {
      const isSelected = prevState.selectedItems.includes(item);
      const newSelectedItems = isSelected
        ? prevState.selectedItems.filter(i => i !== item)  // Remove item if already selected
        : [...prevState.selectedItems, item];  // Add item if not selected

      return { selectedItems: newSelectedItems };
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white">
      <form>
        <div className="flex flex-col gap-4 mb-6">
          {availableItems.map((item) => (
            <label
              key={item}
              className={`relative cursor-pointer flex items-center justify-center py-4 px-6 rounded-full border transition-colors 
                ${formData.selectedItems.includes(item) 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white text-black border-gray-300 hover:bg-gray-200'} 
                ${formData.selectedItems.includes(item) && 'text-white'}`}
              onClick={() => handleItemChange(item)}
            >
              {item}
              {formData.selectedItems.includes(item) && (
                <div className="absolute top-4 right-3">
                    <Check />
                </div>
              )}
            </label>
          ))}
        </div>

        <div className="mt-4">
          <Button
            variant="primary"
            size="lg"
            type="submit"
            className='w-full'
            onClick={(e) => e.preventDefault()}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MultipleSelectForm;
