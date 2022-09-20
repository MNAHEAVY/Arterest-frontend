import axios from "axios";

export function productPost(formData) {
  console.log(formData, "form en el action");
  try {
    async function a(dispatch) {
      console.log(formData, "form en el action despues del return");
      const post = await axios
        .post("https://arterest-ecommerce.herokuapp.com/paints/createProducts", formData)
        .then((response) => response.data)
        .catch();
      return dispatch({ type: "POST_ACTIVITY", payload: post });
    }

    return a();
  } catch (error) {
    console.log(error);
  }
}
