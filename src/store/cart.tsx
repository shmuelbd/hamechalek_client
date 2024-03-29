import { signal } from "@preact/signals-react";
import axios from "axios";
import { UPDATE_CART } from "../env";
import { userDetails } from "./user";
import { progressBar } from "./appState";


const getCart = localStorage.getItem("cart") ?? "[]";

export const cartState = signal<any>(JSON.parse(getCart));

const updateCartServer = async (cart: any) => {

    return new Promise(async (myResolve, myReject) => {
        const token = userDetails.value.token;

        await axios.post(UPDATE_CART, {
            token: token,
            items: cart
        })
            .then((res) => {
                myResolve(res.data);
                cartState.value = res.data;
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

    requstToCartServer = setTimeout(() => {
        updateCartServer(stateItemsForUpdate)
    }, 3000);

    cartState.value = [...stateItemsForUpdate];
    localStorage.setItem("cart", JSON.stringify(cartState.value));

}


export const less = (itemid: string | undefined) => {
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
    cartState.value = [...stateItemsForUpdate];
    localStorage.setItem("cart", JSON.stringify(cartState.value));
}
