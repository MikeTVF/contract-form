import { Label, Select } from 'flowbite-react';
import React from 'react';

function SelectInput() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div id="province">
        <div className="mb-2 block">
          <Label htmlFor="countries" value="Province" />
        </div>
        <Select id="countries" required={true}>
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </Select>
      </div>
      <div id="city">
        <div className="mb-2 block">
          <Label htmlFor="countries" value="City" />
        </div>
        <Select id="countries" required={true}>
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </Select>
      </div>
    </div>
  );
}

export default SelectInput;
