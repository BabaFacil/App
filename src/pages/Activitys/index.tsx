import React from 'react';
import {Text, ScrollView} from 'react-native';
import * as S from './styles';
import ActivityCards from '../../components/ActivityCards';
import MenuBar from '../../components/MenuBar';

export default function Activitys() {
  return (
    <S.Container>
        <S.DockGlobal>
            <Text style={{ fontSize: 23}}>Atividades</Text>

            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 120 }}>
                {/* component cardBabaHistory */}
                <ActivityCards nomeBaba={'Fernanda Asato'} dataAtc={'16-04-2024'} horaInicio={'19:30'} horaFim={'22:45'} valor={140.54} img='baba1'/>
                <ActivityCards nomeBaba={'Stephanie Aires'} dataAtc={"15/04/2024"} horaInicio={'19:30'} horaFim={'22:45'} valor={140.78} img='baba2'/>
                <ActivityCards nomeBaba={'Umi Chan'} dataAtc={"02/04/2024"} horaInicio={'19:30'} horaFim={'22:45'} valor={140.78} img='baba2'/>
                <ActivityCards nomeBaba={'Kotori Chan'} dataAtc={"27/03/2024"} horaInicio={'19:30'} horaFim={'22:45'} valor={140.12} img='baba1'/>
                <ActivityCards nomeBaba={'Maki Chan'} dataAtc={"25/03/2024"} horaInicio={'19:30'} horaFim={'22:45'} valor={140.56} img='baba2'/>
                <ActivityCards nomeBaba={'Honoka Chan'} dataAtc={"19/03/2024"} horaInicio={'19:30'} horaFim={'22:45'} valor={140.78} img='baba1'/>
                <ActivityCards nomeBaba={'Leticia Sapucaia'} dataAtc={"16/02/2024"} horaInicio={'19:30'} horaFim={'22:45'} valor={140} img='baba1'/>
                <ActivityCards nomeBaba={'Sayuri Makoto'} dataAtc={"10/02/2024"} horaInicio={'19:30'} horaFim={'22:45'} valor={140.44} img='baba2'/>
                <ActivityCards nomeBaba={'Mona Bell'} dataAtc={"29/01/2024"} horaInicio={'19:30'} horaFim={'22:45'} valor={140.44} img='baba1'/>
                <ActivityCards nomeBaba={'Yoimya fire'} dataAtc={"27/01/2024"} horaInicio={'19:30'} horaFim={'22:45'} valor={140.99} img='baba1'/>
            </ScrollView>

        </S.DockGlobal>
        <MenuBar TelaAtiva={'atividade'}/>
    </S.Container>
  )
}
