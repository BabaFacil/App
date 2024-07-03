import { StyleSheet, View } from 'react-native';
import * as S from './styles'

const ProgressBar = ({ currentBar, limitBar }) => {
  // Calcular a porcentagem de progresso
  const progressPercentage = (currentBar / limitBar) * 100;

  // Calcular a quantidade de barras preenchidas
//   const filledBars = Math.floor((progressPercentage / 100) * limitBar);
//   console.log('FilledBars', filledBars);
  

  return (
    
    <S.Container>
      {Array.from({ length: limitBar }).map((_, index) => (
        console.log("index:", index),
        
        <S.barSegment
          key={index}
          style={[
            index < currentBar ? {backgroundColor: '#FF708D'} : {backgroundColor: '#E0E0E0'},
          ]}
        />
      ))}
    </S.Container>
  );
};

export default ProgressBar;
