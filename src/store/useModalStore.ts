import { create } from 'zustand';

interface ModalStore {
  /** 개인정보 처리방침 모달 보여줌 제어 */
  showPrivacyModal: boolean;
  setShowPrivacyModal: (v: boolean) => void;
  /** 이용약관 모달 보여줌 제어 */
  showTermsModal: boolean;
  setShowTermsModal: (v: boolean) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  showPrivacyModal: false,
  setShowPrivacyModal(v) {
    set({ showPrivacyModal: v });
  },
  showTermsModal: false,
  setShowTermsModal(v) {
    set({ showTermsModal: v });
  },
}));
