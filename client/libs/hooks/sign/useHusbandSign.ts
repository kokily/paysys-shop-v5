import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { addSignAPI, imageUploadAPI } from '../../api/sign';
import { useHusbandState } from '../../context/HusbandContext';
import { useImageState } from '../../context/ImageContext';
import { dataURItoBlob } from '../../utils';

function useHusbandSign() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const [currentImg, setCurrentImg] = useImageState();
  const [husband, setHusband] = useHusbandState();

  const onUploadHusbandSign = async () => {
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

      await addSignAPI({ weddingId: id, sex: 'husband', image: sign });
      setCurrentImg('');
      setHusband(false);
      await queryClient.clear();
    } else {
      return;
    }
  };

  return {
    husband,
    onConfirmHusband: onUploadHusbandSign,
    onCancelHusband: () => setHusband(false),
    setVisibleHusband: () => setHusband(true),
  };
}

export default useHusbandSign;
