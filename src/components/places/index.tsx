import { useRef } from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { styles } from './styles'
import { colors } from '@/src/styles/theme'
import { Place, PlaceProps } from '../place'

type Props = {
  data: PlaceProps[]
}

export function Places({ data }: Props){
  const dimensions = useWindowDimensions()
  const botomSheetRef = useRef<BottomSheet>(null)
  return (
    <BottomSheet>
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Place data={item}/>}
      />
    </BottomSheet>
  )
}