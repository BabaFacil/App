import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color:${({ theme }) => theme.COLORS.BACKGROUND};
    padding:  0 15px;
`;

export const DockGlobal = styled.View`
    flex: 1;
    padding-top: 25px;
    margin: 15px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`
export const Name = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    font-family: ${({ theme }) => theme.FONT.BOLD};
    font-size: 24px;
`