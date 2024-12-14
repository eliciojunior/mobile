import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/src/styles/theme'

export const styles = StyleSheet.create({
  container: {
    height: 56,
    maxHeight: 56,
    backgroundColor: colors.green.base,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[100]
  }
})