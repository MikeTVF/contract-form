import { Button, Table, TextInput } from 'flowbite-react';
import { useFieldArray, useFormContext } from 'react-hook-form';

const ContractServiceTable = () => {
  const { register, watch, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'services'
  });

  const service = {
    name: '',
    qty: 1,
    unitPrice: 0
  };

  const addRow = () => {
    append(service);
  };

  const removeRow = (index: number) => {
    remove(index);
  };

  return (
    <>
      <Table>
        <Table.Head className="!bg-gray-200">
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Unit Price</Table.HeadCell>
          <Table.HeadCell>Total</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Remove</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {fields.map((field, index) => (
            <Table.Row
              key={field.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="w-2/5 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <TextInput
                  type="text"
                  required={true}
                  {...register(`services.${index}.name` as const, {
                    required: true
                  })}
                />
              </Table.Cell>
              <Table.Cell className="w-1/5">
                <TextInput
                  type="number"
                  min={1}
                  {...register(`services.${index}.qty` as const, {
                    valueAsNumber: true
                  })}
                />
              </Table.Cell>
              <Table.Cell className="w-1/5">
                <TextInput
                  min={0}
                  type="number"
                  {...register(`services.${index}.unitPrice` as const, {
                    valueAsNumber: true,
                    min: 0
                  })}
                />
              </Table.Cell>
              <Table.Cell>
                $
                {Number.isNaN(
                  watch(`services.${index}.unitPrice`) *
                    watch(`services.${index}.qty`)
                )
                  ? Number(0).toFixed(2)
                  : (
                      watch(`services.${index}.unitPrice`) *
                      watch(`services.${index}.qty`)
                    ).toFixed(2)}
              </Table.Cell>
              <Table.Cell>
                <span
                  className="cursor-pointer font-medium text-red-500 hover:underline"
                  onClick={() => removeRow(index)}
                >
                  Remove
                </span>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button className="my-4" onClick={addRow}>
        Add Row
      </Button>
    </>
  );
};

export default ContractServiceTable;
