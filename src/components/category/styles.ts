import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/src/styles/theme'

export const styles = StyleSheet.create({
  container: {
    height: 36,
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 12
  },
  name: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500]
  },
  containerSelected: {
    backgroundColor: colors.green.base,
    borderWidth: 0
  },
  nameSelected: {
    color: colors.gray[100]
  }
})