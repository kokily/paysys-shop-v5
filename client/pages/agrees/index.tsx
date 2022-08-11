import type { NextPage } from 'next';
import AddAgree from '../../components/agrees/add/AddAgree';
import Layout from '../../components/agrees/add/Layout';
import useAddAgree from '../../libs/hooks/agrees/useAddAgree';

const AgreePage: NextPage = () => {
  const {
    name,
    onChangeName,
    isAgree,
    onToggleAgree,
    modal,
    onToggleModal,
    onAddAgree,
  } = useAddAgree();

  return (
    <Layout>
      <AddAgree
        name={name}
        isAgree={isAgree}
        onChangeName={onChangeName}
        onToggleAgree={onToggleAgree}
        modal={modal}
        onToggleModal={onToggleModal}
        onAddAgree={onAddAgree}
      />
    </Layout>
  );
};

export default AgreePage;
