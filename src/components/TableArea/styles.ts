import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #FFF;
    padding: 20px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    margin-top: 15px;
`;

export const TableHeadColumn = styled.th<{Width?: number}>`
    padding: 10px 0;
    text-align: left;
    width: ${p => p.Width ? `${p.Width}px` : 'auto'};
`;