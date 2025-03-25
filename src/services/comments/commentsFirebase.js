import db from "../firebase";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/comments");

const getComments = () => {
    return get(dbRef);
};

const addComments = (name, comment) => {
    return push(dbRef, {
      name: name,
      comment: comment
    });
  };

  const removeComments = (key) => {
    const dbRefComments = ref(db, `/comments/${key}`);
    return remove(dbRefComments);
  };

export default {
    getComments,
    addComments,
    removeComments,
};