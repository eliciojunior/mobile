import { TouchableOpacity, TouchableOpacityProps, View, Text, Image } from 'react-native'
import { styles } from './styles'
import { colors } from '@/src/styles/theme'
import { IconTicket } from '@tabler/icons-react-native'

export type PlaceProps = {
  id: string,
  name: string
  description: string
  coupons: number
  cover: string
  address: string
}

type Props = TouchableOpacityProps & {
  data: PlaceProps
}

export function Place({ data, ...rest }: Props){
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image style={styles.image} source={{uri: data.cover}}/>
      <View>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description}>{data.description}</Text>
        
        <View style={styles.footer}>
          <IconTicket size={16} color={colors.red.base}></IconTicket>
          <Text style={styles.tickets}>
            {data.coupons} cupons disponíveis
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}