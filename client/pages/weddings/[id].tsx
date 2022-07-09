import type { NextPage } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import ReadWedding from '../../components/weddings/read/ReadWedding';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useBrideSign from '../../libs/hooks/sign/useBrideSign';
import useHusbandSign from '../../libs/hooks/sign/useHusbandSign';
import useReadWedding from '../../libs/hooks/weddings/useReadWedding';

const ReadWeddingPage: NextPage = () => {
  const { user } = useLoggedIn(true);
  const {
    wedding,
    onBack,
    onEdit,
    onRemoveSign,
    modal,
    onModalOpen,
    onCancel,
    onConfirm,
  } = useReadWedding();
  const { husband, onConfirmHusband, onCancelHusband, setVisibleHusband } =
    useHusbandSign();
  const { bride, onConfirmBride, onCancelBride, setVisibleBride } =
    useBrideSign();

  return (
    <PageTemplate user={user}>
      <ReadWedding
        wedding={wedding}
        onBack={onBack}
        onEdit={onEdit}
        onRemoveSign={onRemoveSign}
        modal={modal}
        onModalOpen={onModalOpen}
        onCancel={onCancel}
        onConfirm={onConfirm}
        husband={husband}
        onConfirmHusband={onConfirmHusband}
        onCancelHusband={onCancelHusband}
        setVisibleHusband={setVisibleHusband}
        bride={bride}
        onConfirmBride={onConfirmBride}
        onCancelBride={onCancelBride}
        setVisibleBride={setVisibleBride}
      />
    </PageTemplate>
  );
};

export default ReadWeddingPage;
