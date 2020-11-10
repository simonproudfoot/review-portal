export const strict = false;
export const state = () => ({
  page: "home",
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
  },
  chat: [
    {
      creator: "user",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
    },
    {
      creator: "agent",
      message: "Sed ut perspiciatis unde omnis iste natus error"
    }
  ]
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
  },
  chat(state) {
    return state.chat;
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
  },
  set_chat(state, val) {
    state.chat.push(val);
  }
};
