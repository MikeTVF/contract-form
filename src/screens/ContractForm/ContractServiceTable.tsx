import { ContractFormDispatch, ContractFormState } from 'context/ContractFormContext';
import { Button, Table, TextInput } from 'flowbite-react';
import { useState, memo, useContext, useEffect } from 'react';
import { useForm, FormProvider, useFormContext } from "react-hook-form";

const ContractServiceTable = () => {
    const { register, getValues, watch } = useFormContext(); 

  const [rows, setRows] = useState([
    {
      name: '',
      qty: 1,
      unitPrice: 0,
      total: 0
    }
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        name: '',
        qty: 1,
        unitPrice: 0,
        total: 0
      }
    ]);
  };

  console.log('first')

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
          {rows.map((row, index) => (
            <Table.Row
              key={index}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="w-2/5 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <TextInput
                  type="text"
                //   value={row.name}
                  {...register(`services.${index}.name`)}
                //   onChange={(event) => {
                //     const newRows = [...rows];
                //     newRows[index].name = event.target.value;
                //     setRows(newRows);
                //   }}
                />
              </Table.Cell>
              <Table.Cell className="w-1/5">
                <TextInput
                  type="number"
                  min={1}
                //   value={row.qty}
                //   onChange={(event) => {
                //     const newRows = [...rows];
                //     newRows[index].qty =
                //       parseInt(event.target.value) >= 1
                //         ? parseInt(event.target.value)
                //         : 1 || 1;
                //     newRows[index].total =
                //       newRows[index].qty * newRows[index].unitPrice || 0;
                //     setRows(newRows);
                //   }}
                {...register(`services.${index}.qty`)}
                />
              </Table.Cell>
              <Table.Cell className="w-1/5">
                <TextInput
                  type="number"
                //   value={row.unitPrice}
                //   onChange={(event) => {
                //     const newRows = [...rows];
                //     newRows[index].unitPrice =
                //       parseFloat(event.target.value) >= 0
                //         ? parseFloat(event.target.value)
                //         : 0 || 0;
                //     newRows[index].total =
                //       newRows[index].qty * newRows[index].unitPrice || 0;
                //     setRows(newRows);
                //   }}
                {...register(`services.${index}.unitPrice`)}
                />
              </Table.Cell>
              <Table.Cell>${(watch(`services.${index}.unitPrice`) * watch(`services.${index}.qty`)).toFixed(2)}</Table.Cell>
              <Table.Cell>
        <span
          className="cursor-pointer font-medium text-red-500 hover:underline"
        //   onClick={() => {}}
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

export default memo(ContractServiceTable);
