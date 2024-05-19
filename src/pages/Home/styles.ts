import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color:${({theme}) => theme.COLORS.BACKGROUND};
`;

export const DockGlobal = styled.View`
    flex: 1;
    padding-top: 25px;
    margin: 15px;

`;

export const DockServices = styled.View`
    margin-top: 15px;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;

`;

export const ServiceText = styled.Text`
    font-size: 23px;
    font-family:"OpenSans_700Bold";
    color: ${({theme}) => theme.COLORS.TEXT_PRIMARY};
`

export const ChildText = styled.Text`
    font-size: 23px;
    margin-top: 55px;
    font-family:"OpenSans_700Bold";
    color: ${({theme}) => theme.COLORS.TEXT_PRIMARY};
`
export const Services = styled.TouchableOpacity`
    height: 90px;
    width: 48%;
    background-color: #E96181;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const DockKids = styled.FlatList`
    
`

export const AddBtn = styled.TouchableOpacity`
    position: absolute;
    bottom: 80px;
    right: 20px;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 70px;
    background-color: ${({theme}) => theme.COLORS.PRIMARY};
    
`