import { FC } from 'react';
import { tw } from '../../utils';

interface IconProps {
  onClick?: () => void;
  className?: string;
}

export const ArrowIcon: FC<IconProps> = ({ onClick, className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className={tw('w-6 h-6 cursor-pointer', className)}
      onClick={onClick}
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
      />
    </svg>
  );
};

export const HomeIcon: FC<IconProps> = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className='w-5 h-5'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
      />
    </svg>
  );
};

export const NewSubmissionIcon: FC<IconProps> = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className='w-5 h-5'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  );
};

export const NoPrescriptionIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={tw('w-6 h-6', className)}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
      />
    </svg>
  );
};
