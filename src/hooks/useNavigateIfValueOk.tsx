import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
interface Props {
  value: boolean;
}
const useNavigateIfValueOk = ({ value }: Props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (value) {
      navigate('/');
    }
  }, [value, navigate]);
};

export default useNavigateIfValueOk;
