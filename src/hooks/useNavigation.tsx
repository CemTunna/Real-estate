import { useNavigate, useLocation } from 'react-router-dom';
type Props = {
  path: string;
};
const useNavigation = ({ path }: Props) => {
  const navigate = useNavigate();
  return () => navigate(path);
};

export default useNavigation;
