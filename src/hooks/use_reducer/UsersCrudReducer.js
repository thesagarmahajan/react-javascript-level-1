import { useEffect, useReducer, useRef } from "react";

let initialUsers = {
  users: [],
  userToUpdate: {},
  updateFormVisibility: false
};

let usersReducer = (state, action) => {
  switch (action.type) {
    case "save":
      return { ...state, users: action.payload };
    case "initUserToUpdate":
      return {
        ...state,
        userToUpdate: action.payload,
        updateFormVisibility: true
      };
    case "setUserToUpdate":
      return {
        ...state,
        userToUpdate: {
          ...state.userToUpdate,
          [action.payload.name]: action.payload.value
        }
      };
    case "closeUpdateForm":
      return { ...state, updateFormVisibility: action.payload };
    default:
      return state;
  }
};

let usersAction = (payload = {}) => {
  return {
    SAVE: { type: "save", payload: payload },
    DELETE: { type: "delete", payload: payload },
    INIT_USER_TO_UPDATE: { type: "initUserToUpdate", payload: payload },
    SET_USER_TO_UPDATE: { type: "setUserToUpdate", payload: payload },
    CLOSE_UPDATE_FORM: { type: "closeUpdateForm", payload: payload }
  };
};

export default function UsersCrudReducer() {
  let [state, usersDispatcher] = useReducer(usersReducer, initialUsers);
  /* 
    {users:[], userToUpdate:{}
  */
  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((data) => {
        usersDispatcher(usersAction(data).SAVE);
      });
  }, []);

  let handleUpdateFormChange = (e) => {
    console.log({ name: e.target.name, value: e.target.value });
    usersDispatcher(
      usersAction({ name: e.target.name, value: e.target.value })
        .SET_USER_TO_UPDATE
    );
    // console.log(e.target.name + " = " + e.target.value);
  };
  return (
    <>
      {JSON.stringify(state)}
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.users.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => {
                      console.log(user);
                      usersDispatcher(usersAction(user).INIT_USER_TO_UPDATE);
                    }}
                  >
                    E
                  </button>
                  <button>D</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <form
        style={{
          visibility: state.updateFormVisibility ? "visible" : "hidden"
        }}
      >
        <h3>
          Update Form{" "}
          <button
            type="button"
            onClick={() =>
              usersDispatcher(usersAction(false).CLOSE_UPDATE_FORM)
            }
          >
            X
          </button>
        </h3>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleUpdateFormChange}
          value={state.userToUpdate.name}
        />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          onChange={handleUpdateFormChange}
          value={state.userToUpdate.email}
        />
        <button>Update</button>
      </form>
    </>
  );
}
