import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Datepicker from './ContractDatePicker';

const ContractForm = () => {
  const navigate = useNavigate();
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate);
  };
  return (
    <div>
      <Button onClick={() => navigate('/')} className="mb-4">
        Back
      </Button>

      <h2 className="mb-2">Contract Form</h2>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="companyName" value="Partner name" />
          </div>
          <TextInput id="companyName" type="text" required={true} />
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <Label htmlFor="address1" value="Street Address" />
            <TextInput id="address1" type="text" required={true} />
          </div>
          <div>
            <Label htmlFor="address2" value="Apt, suite, etc (optional)" />
            <TextInput id="address2" type="text" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <Label htmlFor="city" value="City" />
            <TextInput id="city" type="text" />
          </div>
          <div>
            <Label htmlFor="province" value="Province" />
            <TextInput id="province" type="text" />
          </div>
        </div>
        <div className="">
          <div>
            <Label htmlFor="services" value="Services" />
          </div>
          <Button size='sm' color='gray'>Add</Button>
        </div>
        <div id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Custom message" />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            required={true}
            rows={4}
          />
        </div>
        <div>
          <Label htmlFor="date-picker">Create date</Label>
          <Datepicker onChange={handleChange} />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ContractForm;
