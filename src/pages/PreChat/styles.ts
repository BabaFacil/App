import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color:${({ theme }) => theme.COLORS.BACKGROUND};
    /* padding:  0 15px; */
`;

export const DockGlobal = styled.View`
    padding-top: 25px;
    /* margin: 15px; */
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0  15px 20px 15px;
`
export const Name = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    font-family: ${({ theme }) => theme.FONT.BOLD};
    font-size: 24px;
`

export const MessagesContainer = styled.FlatList`
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding: 10px 20px 20px 20px;
    background-color: ${({ theme }) => theme.COLORS.CARD_BACKGROUND};
    min-height: 100%;
`
export const Separator = styled.View`
    width: 100%;
    height: 1px;
    background-color: #EAEAEA;
    margin: 5px 0;
`