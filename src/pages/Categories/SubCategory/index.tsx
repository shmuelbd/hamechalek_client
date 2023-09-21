import React from 'react'
import styled from 'styled-components';
import cook from "./images/cook.jpg"
import cookies from "./images/cookies.jpg"
import drink from "./images/drink.jpg"
import jam from "./images/jam.jpg"
import canning from "./images/canning.jpg"
import cutlery from "./images/cutlery.jpg"
import cups from "./images/cups.jpg"
import Aluminum_molds from "./images/Aluminum_molds.jpg"
import Aluminum_foil from "./images/Aluminum_foil.jpg"
import nylon from "./images/nylon.jpg"
import plastic_container from "./images/plastic_container.jpg"
import plastic_wrap from "./images/plastic_wrap.jpg"
import cleaners_floor from "./images/cleaners_floor.jpg"
import toilet_brush from "./images/toilet_brush.jpg"
import main_clean from "./images/main_clean.jpg"
import laundry_detergents from "./images/laundry_detergents.jpg"
import broom from "./images/broom.jpg"
import disinfection from "./images/disinfection.jpg"
import stationery from "./images/stationery.jpg"
import notebook from "./images/notebook.jpg"
import paper from "./images/paper.jpg"
import officeTools from "./images/officeTools.jpg"
import binder from "./images/binder.jpg"
import tissue from "./images/tissue.jpg"
import toiletpaper from "./images/toiletpaper.jpg"
import tablenapkins from "./images/tablenapkins.jpg"
import papertowel from "./images/papertowel.jpg"
import diapers from "./images/diapers.jpg"
import hygiene from "./images/hygiene.jpg"
import shampoo from "./images/shampoo.jpg"
import bathroom from "./images/bathroom.jpg"
import babyfood from "./images/babyfood.jpg"
import cosmetics from "./images/cosmetics.jpg"
import pots from "./images/pots.jpg"
import candles from "./images/candles.jpg"
import lightbulbs from "./images/lightbulbs.jpg"

const SubCatItem = styled.div`
width: 100px;
margin: 6px;
display: flex;
flex-wrap: wrap;
align-items: stretch;
justify-content: center;
text-align: center;
font-size: 18px;
`;
const SubCatIcon = styled.div<{ background: string }>`
min-width: 100px;
height: 100px;
border-radius: 50%;
background-image: ${(props) => props.background} ;
background-size: contain;
background-position: center;
background-repeat: no-repeat;
`;


type Props = {
    index: string,
    item: any
}



const SubCategory = (props: Props) => {

    let image;
    switch (props.item.pic) {
        case "cook":
            image = cook;
            break;
        case "cookies":
            image = cookies;
            break;
        case "drink":
            image = drink;
            break;
        case "jam":
            image = jam;
            break;
        case "canning":
            image = canning;
            break;
        case "cutlery":
            image = cutlery;
            break;
        case "cups":
            image = cups;
            break;
        case "Aluminum molds":
            image = Aluminum_molds;
            break;
        case "Aluminum foil":
            image = Aluminum_foil;
            break;
        case "nylon":
            image = nylon;
            break;
        case "plastic_container":
            image = plastic_container;
            break;
        case "plastic_wrap":
            image = plastic_wrap;
            break;
        case "cleaners_floor":
            image = cleaners_floor;
            break;
        case "toilet_brush":
            image = toilet_brush;
            break;
        case "main_clean":
            image = main_clean;
            break;
        case "laundry_detergents":
            image = laundry_detergents;
            break;
        case "broom":
            image = broom;
            break;
        case "disinfection":
            image = disinfection;
            break;
        case "stationery":
            image = stationery;
            break;
        case "notebook":
            image = notebook;
            break;
        case "paper":
            image = paper;
            break;
        case "officeTools":
            image = officeTools;
            break;
        case "binder":
            image = binder;
            break;
        case "tissue":
            image = tissue;
            break;
        case "toiletpaper":
            image = toiletpaper;
            break;
        case "tablenapkins":
            image = tablenapkins;
            break;
        case "papertowel":
            image = papertowel;
            break;
        case "diapers":
            image = diapers;
            break;
        case "hygiene":
            image = hygiene;
            break;
        case "shampoo":
            image = shampoo;
            break;
        case "bathroom":
            image = bathroom;
            break;
        case "babyfood":
            image = babyfood;
            break;
        case "cosmetics":
            image = cosmetics;
            break;
        case "pots":
            image = pots;
            break;
        case "candles":
            image = candles;
            break;
        case "lightbulbs":
            image = lightbulbs;
            break;
        default:
            break;
    }

    return (
        <SubCatItem>

            <SubCatIcon key={props.index}
                background={`url(${image})`}
            >
            </SubCatIcon>
            {props.item.name}
        </SubCatItem>
    )
}

export default SubCategory