import { signal } from "@preact/signals";

export const userDetails = signal({ token: false, first_name: 5238 });


// const getCart = localStorage.getItem("cart") ?? "[]";
// const getCart = localStorage.getItem("cart") ? JSON.stringify("cart"):  "[]";




// export const cartState = signal<any>(JSON.parse(getCart));