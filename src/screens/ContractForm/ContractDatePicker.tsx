import React, { useState } from 'react';
import Datepicker from 'tailwind-datepicker-react';

type Props = {
  onChange?: ((date: Date) => void) | undefined;
};

function ContractDatePicker({ onChange }: Props) {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = (state: boolean) => {
    setShow(state);
  };
  return (
    <div id="date-picker" className="relative mt-2 max-w-sm">
      <Datepicker onChange={onChange} show={show} setShow={handleClose} />
    </div>
  );
}

export default ContractDatePicker;
