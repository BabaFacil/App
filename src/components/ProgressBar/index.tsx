import { StyleSheet, View } from 'react-native';

const ProgressBar = ({ currentBar, limitBar }) => {
  // Calcular a porcentagem de progresso
  const progressPercentage = (currentBar / limitBar) * 100;

  // Calcular a quantidade de barras preenchidas
//   const filledBars = Math.floor((progressPercentage / 100) * limitBar);
//   console.log('FilledBars', filledBars);
  

  return (
    
    <View style={styles.container}>
      {Array.from({ length: limitBar }).map((_, index) => (
        console.log("index:", index),
        
        <View
          key={index}
          style={[
            styles.barSegment,
            index < currentBar ? styles.filledBar : styles.unfilledBar,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 10,
  },
  barSegment: {
    flex: 1,
    marginHorizontal: 2,
    height: '100%',
    borderRadius: 5,
  },
  filledBar: {
    backgroundColor: '#FF708D',
  },
  unfilledBar: {
    backgroundColor: '#E0E0E0',
  },
});

export default ProgressBar;
