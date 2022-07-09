import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { addSignAPI, imageUploadAPI } from '../../api/sign';
import { useBrideState } from '../../context/BrideContext';
import { useImageState } from '../../context/ImageContext';
import { dataURItoBlob } from '../../utils';

function useBrideSign() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const [currentImg, setCurrentImg] = useImageState();
  const [bride, setBride] = useBrideState();

  const onUploadBrideSign = async () => {
    if (id && currentImg) {
      const file = dataURItoBlob(currentImg);
      const formData = new FormData();

      formData.append('file', file);

      const response = await imageUploadAPI(formData);

      if (!response) {
        toast.error('업로드 에러!');
        return;
      }

      const sign = `https://image.paysys.kr/${response.key}`;

      await addSignAPI({ weddingId: id, sex: 'bride', image: sign });
      setCurrentImg('');
      setBride(false);
      await queryClient.clear();
    } else {
      return;
    }
  };

  return {
    bride,
    onConfirmBride: onUploadBrideSign,
    onCancelBride: () => setBride(false),
    setVisibleBride: () => setBride(true),
  };
}

export default useBrideSign;
