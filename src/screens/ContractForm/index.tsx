import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import Datepicker from './ContractDatePicker';
import ServiceTable from './ContractServiceTable';
import { useForm, FormProvider } from 'react-hook-form';
import SelectInput from './SelectInput';

export interface Service {
  name: string;
  qty: number;
  unitPrice: number;
}

type FormValues = {
  companyName: string;
  address1: string;
  address2?: string;
  city: string;
  province: string;
  services: Service[];
  message: string;
  createAt: Date;
};

const ContractForm = () => {
  const methods = useForm({
    defaultValues: {
      companyName: '',
      address1: '',
      address2: '',
      city: '',
      province: '',
      services: [{ name: '', qty: 1, unitPrice: 0 }],
      message: '',
      createAt: new Date()
    } as FormValues
  });
  const { register, handleSubmit, setValue } = methods;
  const navigate = useNavigate();
  const handleChange = (selectedDate: Date) => {
    setValue('createAt',selectedDate);
  };
  return (
    <div>
      <Button onClick={() => navigate('/')} className="mb-4">
        Back
      </Button>

      <div className="border border-black p-10">
        <h2 className="mb-2 text-center">Partnership Agreement Form</h2>
        <div className="mb-2">
          <div className="mb-2 block">
            <Label value="Partner 1 name" />
          </div>
          <TextInput type="text" disabled={true} value="Techvify" />
        </div>
        <div className="mb-2">
          <div className="mb-2 block">
            <Label value="Address" />
          </div>
          <TextInput
            type="text"
            disabled={true}
            value="Ha Noi, Vietnam"
          />
        </div>
        <FormProvider {...methods}>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit((data) => console.log(data))}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="companyName" value="Partner 2 name" />
              </div>
              <TextInput
                id="companyName"
                type="text"
                required={true}
                {...register('companyName', { required: true })}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div>
                <Label htmlFor="address1" value="Street Address" />
                <TextInput
                  id="address1"
                  type="text"
                  required={true}
                  {...register('address1', { required: true })}
                />
              </div>
              <div>
                <Label htmlFor="address2" value="Apt, suite, etc (optional)" />
                <TextInput
                  id="address2"
                  type="text"
                  {...register('address2')}
                />
              </div>
            </div>
            <SelectInput />
            <div className="">
              <div>
                <Label htmlFor="services" value="Services / Products" />
              </div>
              <ServiceTable />
            </div>
            <div id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Terms of Agreement" />
              </div>
              <p>
                State the terms that will guide and conduct this partnership
                agreement <br />
                The following partnership agreement form should be used
                following the local and national norms that govern partnership
                agreements. Any change inquiries to the partnership agreement
                need to be accompanied by a change request form two weeks before
                each monthly audit.
              </p>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                {...register('message', { required: true })}
                rows={4}
              />
            </div>
            <div>
              <Label htmlFor="date-picker">Create date</Label>
              <Datepicker onChange={handleChange} />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ContractForm;
