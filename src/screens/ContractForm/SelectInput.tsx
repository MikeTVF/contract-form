import { Label, Select } from 'flowbite-react';
import { useFormContext } from 'react-hook-form';
import data from 'data/provincesVietnam.json';

function SelectInput() {
  const { register, watch } = useFormContext();
  const selectedProvince = watch('province');
  const cityList = data.filter((p) => p.name === selectedProvince)[0]
    ?.districts;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div id="province">
        <div className="mb-2 block">
          <Label htmlFor="province" value="Province" />
        </div>
        <Select
          id="province"
          {...register(`province` as const, { required: true })}
        >
          {data.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </Select>
      </div>
      <div id="city">
        <div className="mb-2 block">
          <Label htmlFor="city" value="City/Districts" />
        </div>
        <Select id="city" {...register(`city` as const, { required: true })}>
          {selectedProvince ? (
            cityList.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))
          ) : (
            <option disabled>Select province first</option>
          )}
        </Select>
      </div>
    </div>
  );
}

export default SelectInput;
