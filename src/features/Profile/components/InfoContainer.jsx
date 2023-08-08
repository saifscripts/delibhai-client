/* eslint-disable react/prop-types */
import Edit from '../../../components/ui/Edit';

export default function InfoContainer({ type, children, edit }) {
  return (
    <div className='mb-3'>
      <div className='flex justify-between items-center mb-2'>
        <h4 className='text-xl font-bold'>{type}</h4>
        {edit && <Edit />}
      </div>

      {children}
    </div>
  );
}
