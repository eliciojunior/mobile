import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/src/styles/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100]
  },
  content: {
    gap: 12,
    padding: 24,
    paddingBottom: 100
  },
  indicator: {
    width: 80,
    height: 4,
    backgroundColor: colors.gray[300]
  },
  title: {
    color: colors.gray[600],
    fontFamily: fontFamily.regular,
    fontSize: 16,
    marginBottom: 16
  }
})