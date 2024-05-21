import styled from 'styled-components/native';

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
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`

export const ChildText = styled.Text`
    font-size: 23px;
    margin-top: 55px;
    font-family:"OpenSans_700Bold";
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
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
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    
`

export const ModalPhotoContainer = styled.View`
    flex: 1;
    border-top-left-radius: 12 ;
    border-top-right-radius: 12 ;
    padding: 0 10px 2px 10px;
    flex-direction: row;
    background-color: rgba(0,0,0, 0.30);
    justify-content: space-between;
    align-items: flex-end;
`
export const ModalText = styled.Text`
    font-size: 20px;
    margin-top: 55px;

    font-family:${({ theme }) => theme.FONT.BOLD};
    color: #FFFF;
`

export const ModalActions = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
`
export const ModalActionsText = styled.Text`
    font-size: 14px;

    font-family:${({ theme }) => theme.FONT.BOLD};
`