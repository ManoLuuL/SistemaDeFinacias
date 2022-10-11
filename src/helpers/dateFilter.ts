import { Item } from "../types/Item";

export const getMesRecorrente = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [ano, mes] = date.split('-');

    for(let i in list){
        if(list[i].date.getFullYear() === parseInt(ano) && (list[i].date.getMonth() + 1) === parseInt(mes)){
            newList.push(list[i]);
        }
    }

    return newList;
}