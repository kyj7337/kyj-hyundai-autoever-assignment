import { useModalStore } from '@/store/useModalStore';
import Modal from '../..';
import useGetPrivacyText from '@/apis/useGetPrivacyText';

/** 개인정보 처리방침 모달 */
export default function PrivacyModal() {
  const { showPrivacyModal, setShowPrivacyModal } = useModalStore();
  const { data } = useGetPrivacyText(showPrivacyModal);

  return (
    <Modal title='개인정보 처리방침' show={showPrivacyModal} setShow={setShowPrivacyModal}>
      <div>{data ? <div dangerouslySetInnerHTML={{ __html: data.content }} /> : <div>로딩중 입니다...</div>}</div>
    </Modal>
  );
}
