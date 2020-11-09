export const strict = false;
export const state = () => ({
  page: "details",
  prevent: false,
  client: {
    reference: "500774 (R1779)",
    username: "Mr Client Test"
  },
  details: {
    changeIncome: false,
    changedExpenditure: false,
    updatedIandE: false
  },
  documents: {
    misc: [
      {
        title: "captureOne.jpg",
        url: "http://example.com",
        uploaded: "2020-08-05"
      },
      {
        title: "captureTwo.png",
        url: "http://example.com",
        uploaded: "2020-07-03"
      }
    ],
    parterSalary: [
      {
        title: "payslip.pdf",
        url: "http://example.com",
        uploaded: "2020-08-05"
      },
      {
        title: "payslip.pdf",
        url: "http://example.com",
        uploaded: "2020-07-03"
      }
    ],
    bankStatement: [
      {
        title: "payslip.pdf",
        url: "http://example.com",
        uploaded: "2020-08-05"
      },
      {
        title: "payslip.pdf",
        url: "http://example.com",
        uploaded: "2020-07-03"
      }
    ]
  }
});
export const getters = {
  page(state) {
    return state.page;
  },
  prevent(state) {
    return state.prevent;
  },
  client(state) {
    return state.client;
  },
  details(state) {
    return state.details;
  },
  documents(state) {
    return state.documents;
  }
};
export const mutations = {
  set_page(state, val) {
    if (state.prevent == false) {
      state.page = val;
    }
  },
  set_prevent(state, val) {
    state.prevent = val;
  },
  set_details(state, val) {
    state.details = val;
  },
  set_documents(state, val) {
    state.documents = val;
  }
};
