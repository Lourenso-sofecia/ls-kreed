
import ButtonContact from '../atoms/ButtonContact';
import Frontend from '../templates/Frontend';
import Loure from '../../src/assets/Loure.jpeg';
import * as S from './styles';
import CardActivity from '../molecules/CardActivity';

function App() {

  return (
    <Frontend>
      <S.Container>
        <div>
          <h1>
            Design driven development of your web product
          </h1>
          <h6>we are a full service digital agency that builds immesive user experience</h6>
          <ButtonContact />
        </div>
        <S.ColumnImage>
          <CardActivity />

          <img src={Loure} alt="Lourenço Sofécia" />
        </S.ColumnImage>
      </S.Container>
    </Frontend>
  )
}

export default App
