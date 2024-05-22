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
    padding: 15px
    marginTop: 10%;
    marginRight: 30%;
    width: 100%;
    flexDirection: row; 
    justifyContent: space-between;
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
    justify-items: center;
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

export const FirstText = styled.Text`
    font-size: 18px;
    font-family: 'OpenSans_400Regular';
    color: ${({theme})=> theme.COLORS.TEXT_PRIMARY};
`

export const SegondText = styled.Text`
    font-size: 13px;
    font-family: 'OpenSans_400Regular';
    color: ${({theme})=> theme.COLORS.TEXT_SMALL};
`

export const Text = styled.Text`
    color: ${({theme})=> theme.COLORS.TEXT_SMALL};
`