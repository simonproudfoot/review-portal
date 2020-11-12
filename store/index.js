export const strict = false;
export const state = () => ({
  page: "home",
  prevent: false,
  reference: "",
  client: {
    title: "",
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    address: {
      address_1: "",
      postcode: ""
    },
    marital_status: "",
    contact_details: [
      {
        phone_no: "",
        type: "",
        marketing_use: ""
      },
      {
        phone_no: "",
        type: "",
        marketing_use: ""
      }
    ],
    email: "",
    residential_status: "",
    employment_status: "",
    occupation: "",
    employer: "",
    address_history: []
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
      creator: "agent",
      message: "Hello, how can I help?"
    },
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
  reference(state) {
    return state.reference;
  },
  chat(state) {
    return state.chat;
  }
};
export const mutations = {
  set_page(state, val) {
    // prevent page change if unsaved changes
    //  if (state.prevent == false) {
    state.page = val;
    // }
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
  },
  set_client(state, val) {
    state.client = val;
  },
  set_reference(state, val) {
    state.reference = val;
  }
};

export const actions = {
  updateUserData({ commit }, payload) {
    commit("set_client", payload.client);
    commit("set_reference", payload.reference);
  }
};
