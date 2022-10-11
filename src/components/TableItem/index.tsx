import { FC } from "react";
import { categories } from "../../data/categories";
import { formatDate } from "../../helpers/dateFilter";
import { Props } from "./interface";
import * as S from "./styles";


export const TableItem: FC<Props> = ({item}) => {



    return(
        <S.TableLine>
            <S.TableColumn>{formatDate(item.date)}</S.TableColumn>
            <S.TableColumn>
                <S.Category Color={categories[item.category].color}>
                {categories[item.category].title}
                </S.Category>
            </S.TableColumn>
            <S.TableColumn>{item.title}</S.TableColumn>
            <S.TableColumn>
                <S.Value Color={categories[item.category].expense ? "red" : "green"}>
                R$ {item.value}
                </S.Value>
            </S.TableColumn>
        </S.TableLine>
    );
}