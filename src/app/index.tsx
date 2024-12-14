import { View, Text } from 'react-native'
import { router } from 'expo-router'

import { Welcome } from '@/src/components/welcome'
import { Steps } from '@/src/components/steps'
import { Button } from '@/src/components/button'

export default function Index(){
  return (
    <View style={{flex: 1, padding: 40, gap: 40}}>
      <Welcome/>
      <Steps/>
      <Button onPress={() => router.navigate('/home')}>
        <Button.Title>Botão</Button.Title>
      </Button>
    </View>
  )
}