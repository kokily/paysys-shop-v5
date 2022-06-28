import type { NextPage } from 'next';
import PageTemplate from '../../../components/common/PageTemplate';
import AddReserve from '../../../components/fronts/reserve/AddReserve';
import useLoggedIn from '../../../libs/hooks/auth/useLoggedIn';
import useAddReserve from '../../../libs/hooks/bills/useAddReserve';

const AddReservePage: NextPage = () => {
  const { user } = useLoggedIn();
  const { reserve, onBack, onChange, onAddReserve, onKeyPress } =
    useAddReserve();

  return (
    <PageTemplate user={user}>
      <AddReserve
        reserve={reserve}
        onBack={onBack}
        onChange={onChange}
        onAddReserve={onAddReserve}
        onKeyPress={onKeyPress}
      />
    </PageTemplate>
  );
};

export default AddReservePage;
