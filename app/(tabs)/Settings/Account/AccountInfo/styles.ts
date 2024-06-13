import styled from 'styled-components/native';


export const BackgoundContainer = styled.View`
    min-height: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`

export const Container = styled.View`
    flex: 1;
    background-color:${({theme}) => theme.COLORS.BACKGROUND};
`;

export const HeaderText = styled.Text`
    color: ${({theme})=> theme.COLORS.TEXT_PRIMARY} ;
    margin-left: 20px;
    font-family: 'OpenSans_700Bold';
    font-size: 16px ;
`

export const UserImageNickname = styled.TouchableOpacity`
    marginTop: 10%;
    marginRight: 30%;
    width: 100%;
    flexDirection: row; 
    justifyContent: center;
    alignItems: center;
`

export const PrincipalText = styled.Text`
    color: ${({theme})=> theme.COLORS.TEXT_PRIMARY};
    margin-left: 20px;
    font-family: 'OpenSans_700Bold';
    font-size: 22px;
`

export const Nav = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonNav = styled.TouchableOpacity`
    flex-direction: row;
    border-radius: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 5px;
    align-self: center;
    align-items: center;
`;

export const ButtonNavView = styled.View`
    flex-direction: row;
    border-radius: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 5px;
    align-self: center;
    align-items: center;
`;

export const EditView = styled.View`
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    left: 240px;
    bottom: 5px;
    backgroundColor: ${({theme}) => theme.COLORS.BACKGROUND};
    border-radius: 90px;
`

export const Text = styled.Text`
    color: ${({theme})=> theme.COLORS.TEXT_PRIMARY};
`
export const InfoText = styled.Text`
    margin-right: 10px;
    font-size: 12px;
    color: ${({theme})=> theme.COLORS.TEXT_SMALL};
`
