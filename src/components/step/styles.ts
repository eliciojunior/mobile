import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/src/styles/theme'

export const style = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    gap: 16,
  },
  details: {
    flex: 1
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[600]
  },
  description: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 4
  }
})