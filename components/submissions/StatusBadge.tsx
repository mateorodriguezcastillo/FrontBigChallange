import { FC } from 'react';
import { tw } from '../../utils';

interface Props {
    status: string
}

const possibleStatus: {[key: string]: {color: string, text: string}} = {
  'pending': {color: 'bg-blue-100 text-blue-700', text: 'Pending'},
  'in_progress': {color: 'bg-green-100 text-green-700', text: 'In Progress'},
  'done': {color: 'bg-gray-100 text-gray-700', text: 'Done'},
};

export const StatusBadge:FC<Props> = ({ status }) => {
  return (
    <span className={tw('text-sm mt-0.5 mr-2 px-3 py-0.5 rounded-xl ', possibleStatus[status]?.color)}>
        {possibleStatus[status]?.text}
    </span>
  )
}
