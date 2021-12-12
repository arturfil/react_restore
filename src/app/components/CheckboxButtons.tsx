import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";

interface Props {
  items: string[];
  checked?: string[];
  onChange: (items: string[]) => void
}

export default function CheckboxButtons({ items, checked, onChange }: Props) {
  const [checkedItems, setCheckedItems] = useState(checked || []);

  function handleCheck(value: string) {
    const currentIndex = checkedItems.findIndex(item => item === value);
    let newChecked: string[] = [];
    if (currentIndex === -1) newChecked = [...checkedItems, value];
    else newChecked = checkedItems.filter(item => item !== value);
    setCheckedItems(newChecked);
    onChange(newChecked);
  }

  return (
    <div>
      <FormGroup>
        {items.map(item => (
          <FormControlLabel
            key={item}
            control={
              <Checkbox 
                onClick={() => handleCheck(item)}
                checked={checkedItems.indexOf(item) !== -1}
              />
            }
            label={item}
          />
        ))}
      </FormGroup>
    </div>
  )
}
