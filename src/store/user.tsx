import { signal } from "@preact/signals";



const userData = { token: false, first_name: 0 };
// const userData = JSON.parse(localStorage.getItem("user") || "");
// console.log(typeof localStorage.getItem("user"));
// console.log(localStorage.getItem("user"));

export const userDetails = signal(userData);


// const getCart = localStorage.getItem("cart") ?? "[]";
// const getCart = localStorage.getItem("cart") ? JSON.stringify("cart"):  "[]";




// export const cartState = signal<any>(JSON.parse(getCart));