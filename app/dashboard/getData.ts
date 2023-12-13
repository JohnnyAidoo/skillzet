import { collection, getDocs } from "firebase/firestore";
import { firebaseStore } from "../backend/firebase";

export async function GetCourses() {
  let res: any = [];

  const collection_ref = collection(firebaseStore, "Course");
  const doc_ref = await getDocs(collection_ref);
  console.log(doc_ref);

  doc_ref.forEach((course) => {
    res.push({
      id: course.id,
      ...course.data(),
    });
  });

  return res;
}
