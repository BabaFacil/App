import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    margin-top: 10px;
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

export const Nav = styled.View`
    flex: 1;
    flex-direction: row;
    justify-items: center;
    align-items: center;
`;

export const Text = styled.Text`
    margin-left: 5px;
    font-family: 'OpenSans_500Medium';
    font-size: 14px;

`