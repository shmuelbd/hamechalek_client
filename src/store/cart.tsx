import { signal } from "@preact/signals-react";


const getCart = localStorage.getItem("cart") ?? "[]";

export const cartState = signal<any>(JSON.parse(getCart));


export const add = (itemid: string | undefined, item: any) => {
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
