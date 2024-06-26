import { signal } from "@preact/signals-react";
import axios from "axios";
import { GET_CART, UPDATE_CART, UPDATE_CART_NO_USER } from "../env";
import { userDetails } from "./user";
import { progressBar } from "./appState";

const token = userDetails.value.token;
let cart: any = {
    items: [],
    total: 0
};

let getCart = {}

export const user_cart = async () => {

    return new Promise(async (myResolve, myReject) => {

        await axios.post(GET_CART, {
            token: userDetails.value.token,
        })
            .then((res) => {
                // return res.data
                cartState.value = res.data;
                myResolve(res.data);
            }).catch((err) => {
                myReject(
                    JSON.parse(localStorage.getItem("cart") || "")
                );
            })
    });

}



export const cartState = signal<any>(cart);

const updateCartServer = async (cart: any) => {

    const url = userDetails.value.token ? UPDATE_CART : UPDATE_CART_NO_USER;

    return new Promise(async (myResolve, myReject) => {

        await axios.post(url, {
            token: userDetails.value.token,
            items: cart
        })
            .then((res) => {
                myResolve(res.data);
                cartState.value = res.data;
                if (!userDetails.value.token) {
                    localStorage.setItem("cart", JSON.stringify(cartState.value));
                }
                // localStorage.setItem("cart", JSON.stringify(cartState.value));
                progressBar.value = false;

            }).catch((err) => {
                myReject(err);
            })
    });

}

let requstToCartServer: any;
export const updateCart = async (operation: "add" | "less", itemid: string | undefined, item?: any) => {
    clearTimeout(requstToCartServer);
    progressBar.value = true;

    let stateItemsForUpdate = cartState.value.items;
    let filterForUpdate = stateItemsForUpdate.filter((item: any) => item.id == itemid);

    if (operation === "add") {

        //if item does not exist
        if (filterForUpdate.length < 1) {
            stateItemsForUpdate.push({
                id: itemid,
                amount: 1,
                item_name: item.item_name,
                item_name_en: item.item_name_en,
                picture_link: item.picture_link,
                sale_nis: item.sale_nis
            })
        }
        //if item exist
        if (filterForUpdate.length > 0) {
            stateItemsForUpdate.forEach((item: any) => {
                if (item.id == itemid) {
                    item.amount = item.amount + 1;
                    item.total = false
                }
            });
        }
    }

    if (operation === "less") {

        stateItemsForUpdate.forEach((item: any) => {
            if (item.id == itemid && item.amount >= 1) {
                item.amount = item.amount - 1;
                item.total = false
            } if (item.id == itemid && item.amount === 0) {
                let filterForUpdate = stateItemsForUpdate.filter((item: any) => item.id != itemid);
                // console.log("filterForUpdate: ", filterForUpdate);
                stateItemsForUpdate = [...filterForUpdate];
            }
        });

    }

    let newCart = { items: [...stateItemsForUpdate], total: false };
    cartState.value = newCart
    if (!userDetails.value.token) {
        localStorage.setItem("cart", JSON.stringify(cartState.value.items));
    }
    //to ensure user are connected
    // if (userDetails.value.token != false) {
    requstToCartServer = setTimeout(async () => {
        //to ensure user are connected
        // if (userDetails.value.token != false)
        await updateCartServer(stateItemsForUpdate)
    }, 3000);
    // } else

}



// export const add = async (itemid: string | undefined, item: any) => {
//     clearTimeout(requstToCartServer);
//     progressBar.value = true;

//     let stateItemsForUpdate = cartState.value;
//     let filterForUpdate = stateItemsForUpdate.filter((item: any) => item.id == itemid);
//     if (filterForUpdate.length > 0)
//         stateItemsForUpdate.forEach((item: any) => {
//             if (item.id == itemid)
//                 item.amount++
//         });
//     else {
//         stateItemsForUpdate.push({
//             id: itemid, amount: 1,
//             item_name: item.item_name,
//             item_name_en: item.item_name_en,
//             picture_link: item.picture_link,
//             sale_nis: item.sale_nis
//         })
//     }

//     //to ensure user are connected
//     // if (userDetails.value.token != false) {
//     requstToCartServer = setTimeout(async () => {
//         //to ensure user are connected
//         // if (userDetails.value.token != false)
//         await updateCartServer(stateItemsForUpdate)
//     }, 3000);
//     // } else

//     cartState.value.items = [...stateItemsForUpdate];
//     if (!userDetails.value.token) {
//         localStorage.setItem("cart", JSON.stringify(cartState.value.items));
//     }

// }


// export const less = (itemid: string | undefined) => {
//     clearTimeout(requstToCartServer);
//     progressBar.value = true;

//     let stateItemsForUpdate = cartState.value.items;
//     stateItemsForUpdate.forEach((item: any) => {
//         if (item.id == itemid && item.amount >= 1)
//             item.amount--
//         if (item.id == itemid && item.amount === 0) {
//             let filterForUpdate = stateItemsForUpdate.filter((item: any) => item.id != itemid);
//             // console.log("filterForUpdate: ", filterForUpdate);
//             stateItemsForUpdate = [...filterForUpdate];
//         }
//     });


//     //to ensure user are connected
//     // if (userDetails.value.token != false) {
//     requstToCartServer = setTimeout(async () => {
//         //to ensure user are connected
//         // if (userDetails.value.token != false)
//         await updateCartServer(stateItemsForUpdate)
//     }, 3000);
//     // } else


//     cartState.value.items = [...stateItemsForUpdate];
//     if (!userDetails.value.token) {
//         localStorage.setItem("cart", JSON.stringify(cartState.value.items));
//     }


//     // cartState.value = [...stateItemsForUpdate];
//     // localStorage.setItem("cart", JSON.stringify(cartState.value));
// }
