import db from "../firebase";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/comments");

const getComments = () => {
    return get(dbRef);
};

export default {
    getComments,
};