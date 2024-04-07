import { signal } from "@preact/signals-react";
import axios from "axios";
import { GET_CART, UPDATE_CART, UPDATE_CART_NO_USER } from "../env";
import { userDetails } from "./user";
import { progressBar } from "./appState";
import { log } from "console";

const token = userDetails.value.token;
let cart: any = [];

export const user_cart = async () => {

    return new Promise(async (myResolve, myReject) => {

        await axios.post(GET_CART, {
            token: userDetails.value.token,
        })
            .then((res) => {
                myResolve(res.data);
                // cartState.value = res.data;
            }).catch((err) => {
                myReject(err);
                cart = []
            })
    });

}


const getCart = userDetails.value.token ? cart : localStorage.getItem("cart") ?? "[]";



export const cartState = signal<any>(JSON.parse(getCart));

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
export const add = async (itemid: string | undefined, item: any) => {
    clearTimeout(requstToCartServer);
    progressBar.value = true;

    let stateItemsForUpdate = cartState.value;
    let filterForUpdate = stateItemsForUpdate.filter((item: any) => item.id == itemid);
    if (filterForUpdate.length > 0)
        stateItemsForUpdate.forEach((item: any) => {
            if (item.id == itemid)
                item.amount++
        });
    else {
        stateItemsForUpdate.push({
            id: itemid, amount: 1,
            item_name: item.item_name,
            item_name_en: item.item_name_en,
            picture_link: item.picture_link,
            sale_nis: item.sale_nis
        })
    }

    //to ensure user are connected
    // if (userDetails.value.token != false) {
    requstToCartServer = setTimeout(async () => {
        //to ensure user are connected
        // if (userDetails.value.token != false)
        await updateCartServer(stateItemsForUpdate)
    }, 3000);
    // } else

    cartState.value = [...stateItemsForUpdate];
    if (!userDetails.value.token) {
        localStorage.setItem("cart", JSON.stringify(cartState.value));
    }

}


export const less = (itemid: string | undefined) => {
    clearTimeout(requstToCartServer);
    progressBar.value = true;

    let stateItemsForUpdate = cartState.value;
    stateItemsForUpdate.forEach((item: any) => {
        if (item.id == itemid && item.amount >= 1)
            item.amount--
        if (item.id == itemid && item.amount === 0) {
            let filterForUpdate = stateItemsForUpdate.filter((item: any) => item.id != itemid);
            console.log("filterForUpdate: ", filterForUpdate);
            stateItemsForUpdate = [...filterForUpdate];
        }
    });


    //to ensure user are connected
    // if (userDetails.value.token != false) {
    requstToCartServer = setTimeout(async () => {
        //to ensure user are connected
        // if (userDetails.value.token != false)
        await updateCartServer(stateItemsForUpdate)
    }, 3000);
    // } else


    cartState.value = [...stateItemsForUpdate];
    if (!userDetails.value.token) {
        localStorage.setItem("cart", JSON.stringify(cartState.value));
    }


    // cartState.value = [...stateItemsForUpdate];
    // localStorage.setItem("cart", JSON.stringify(cartState.value));
}
