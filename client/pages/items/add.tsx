import type { NextPage } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import AddItem from '../../components/items/add/AddItem';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useAddItem from '../../libs/hooks/items/useAddItem';

const AddItemPage: NextPage = () => {
  const { user } = useLoggedIn();
  const {
    name,
    divide,
    native,
    unit,
    price,
    onBack,
    onChange,
    onAddItem,
    onKeyPress,
  } = useAddItem({ edit: false });

  return (
    <PageTemplate user={user}>
      <AddItem
        name={name}
        divide={divide}
        native={native}
        unit={unit}
        price={price}
        onBack={onBack}
        onChange={onChange}
        onAddItem={onAddItem}
        onKeyPress={onKeyPress}
      />
    </PageTemplate>
  );
};

export default AddItemPage;
