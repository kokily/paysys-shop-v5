import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { imageUploadAPI } from '../../api/sign';
import { useImageState } from '../../context/ImageContext';
import { dataURItoBlob } from '../../utils';

function useAgreeSign() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [currentImg, setCurrentImg] = useImageState();
  const [agree, setAgree] = useState(false);

  const onToggleAgree = () => {
    setAgree(!agree);
  };

  const onAgreeSign = async () => {
    if (currentImg) {
      const file = dataURItoBlob(currentImg);
      const formData = new FormData();

      formData.append('file', file);

      const response = await imageUploadAPI(formData);

      if (!response) {
        toast.error('업로드 에러!');
        return;
      }

      const sign = `https://image.paysys.kr/${response.key}`;
    } else {
      return;
    }
  };

  return {
    agree,
    onToggleAgree,
    onAgreeSign,
  };
}

export default useAgreeSign;
