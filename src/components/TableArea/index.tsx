import { FC } from "react";
import { TableItem } from "../TableItem";
import { Props } from "./interface";
import * as S from "./styles";

export const TableArea: FC<Props> = ({ list }) => {
    return (
        <S.Table>
            <thead>
                <tr>
                    <S.TableHeadColumn Width={100}>Data</S.TableHeadColumn>
                    <S.TableHeadColumn Width={130}>Categoria</S.TableHeadColumn>
                    <S.TableHeadColumn>Título</S.TableHeadColumn>
                    <S.TableHeadColumn Width={150}>Valor</S.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item}/>
                ))}
            </tbody>
        </S.Table>
    );
}