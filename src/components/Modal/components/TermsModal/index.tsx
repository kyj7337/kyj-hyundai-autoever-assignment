import useGetTermsText from '@/apis/useGetTermsText';
import { useModalStore } from '@/store/useModalStore';
import Modal from '../..';

/** 이용약관 모달 */
export default function TermsModal() {
  const { showTermsModal, setShowTermsModal } = useModalStore();
  const { data } = useGetTermsText(showTermsModal);
  return (
    <Modal title='이용약관' show={showTermsModal} setShow={setShowTermsModal}>
      <div>{data ? <div dangerouslySetInnerHTML={{ __html: data.content }} /> : <div>로딩중입니다..</div>}</div>
    </Modal>
  );
}
