import * as ActionType from "./../constant/ActionType";

let initialState = {
  userList: [
    {
      id: 1,
      name: "Dang Gia Le",
      username: "giale1234",
      email: "phuonggiale13@gmail.com",
      phoneNumber: "0938919001",
      type: "VIP"
    },
    {
      id: 2,
      name: "Dang Minh Tri",
      username: "minhtri1234",
      email: "minhtrideptrai@gmail.com",
      phoneNumber: "0901234567",
      type: "VIP"
    },
    {
      id: 3,
      name: "Gia Le Phuong",
      username: "le.dang1234",
      email: "le.dang@hcmut.edu.vn",
      phoneNumber: "0913622678",
      type: "VIP"
    }
  ],
  userEdit: null,
  keyword: ""
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
   
      case ActionType.SUBMIT:
        if (action.user.id) {
          //UPDATE
          let index = state.userList.findIndex(item => {
            return item.id === action.user.id;
          });
          if (index !== -1) {
            let userListUpdate = [...state.userList];
            userListUpdate[index] = action.user;
            state.userList = userListUpdate;
          }
        } else {
          //ADD
          let userAdd = { ...action.user, id: Math.random() };
          state.userList = [...state.userList, userAdd];
        }
  
        return { ...state };
  
      case ActionType.EDIT:
        state.userEdit = action.user;
        return { ...state };

      case ActionType.DELETE:
       
        let index = state.userList.findIndex(item => {
          return item.id === action.user.id;
        });
        if(index !== -1){
          let userListUpdate = [...state.userList];
          userListUpdate.splice(index,1);
          state.userList = userListUpdate;
        }
       
        return { ...state };
      
      case ActionType.SEARCH:
        state.keyword = action.keyword;
        return { ...state };
  
      default:
        return { ...state };
    }
  };
  
  export default userReducer;
  