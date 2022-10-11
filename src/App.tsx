import * as S from "./App.styles";
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { useEffect, useState } from "react";
import { getMesRecorrente, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";

const App = () => {

  const [list, setList] = useState(items);
  const [mesRecorrente, setMesRecorrente] = useState(getMesRecorrente());
  const [filterList, setFilterList] = useState<Item[]>([]);

  useEffect(() => {
    setFilterList(filterListByMonth(list, mesRecorrente));
  }, [list, mesRecorrente]);

  return (
    <S.Container>

      <S.Header>
        <S.HeaderText>Sistema Financeiro</S.HeaderText>
      </S.Header>

      <S.Body>
        
        <InfoArea />

        {/** Area de inserção*/}

        <TableArea 
         list={filterList}
        />

      </S.Body>

    </S.Container>
  );
}
export default App;