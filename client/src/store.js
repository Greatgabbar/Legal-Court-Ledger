import create from 'zustand';

const useBearStore = create((set) => ({
  roles: '',
  cases: [
    {
      caseId: 'UPHR059364232022',
      name: 'Raja vs Moti',
      judge: 'Shubham Trivedi',
      lawyer: 'Akshat Gupta',
      caseType: 'Crime',
      caseStatus: 'pending',
    },
    {
      caseId: 'PUCD909363492022',
      name: 'Abhilaksh vs Shruti ',
      judge: 'Shubham Trivedi',
      lawyer: 'Akshat Gupta',
      caseType: 'DIVORCE PETITION',
      caseStatus: 'pending',
    },
    {
      caseId: 'APCE032423423434',
      name: 'Sajan vs Sjanaa',
      judge: 'Shubham Trivedi',
      lawyer: 'Akshat Gupta',
      caseType: 'Crime',
      caseStatus: 'pending',
    },
    {
      caseId: 'CDHR059313123233',
      name: 'Akshay Khandelwal vs Yoshna ',
      judge: 'Shubham Trivedi',
      lawyer: 'Akshat Gupta',
      caseType: 'Human Trafficing',
      caseStatus: 'pending',
    },
    {
      caseId: 'HRCE233423423424',
      name: 'Tanmay Dukhija vs Saeed',
      judge: 'Shubham Trivedi',
      lawyer: 'Akshat Gupta',
      caseType: 'AGAINST ACQUITALS',
      caseStatus: 'pending',
    },
    {
      caseId: 'DLCE059363492022',
      name: 'Rupali vs Abdul',
      judge: 'Shubham Trivedi',
      lawyer: 'Akshat Gupta',
      caseType: 'Crime',
      caseStatus: 'pending',
    },
    {
      caseId: 'DLCE0423',
      name: 'Anmol Tiwari vs Sarthak Gupta',
      judge: 'Shubham Trivedi',
      lawyer: 'Akshat Gupta',
      caseType: 'Crime',
      caseStatus: 'pending',
    },
  ],
  setCases: (temp) =>
    set((state) => ({ ...state, cases: [...state.cases, temp] })),
  setroles: (role) => set((state) => ({ ...state, roles: role })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useBearStore;
