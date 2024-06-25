import { StyleSheet, TextInput, TextInputProps } from 'react-native'

export function Input(props: TextInputProps) {
  const { style, ...rest } = props
  return (
    <TextInput
      style={[styles.input, style]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    maxHeight: 47,
    padding: 14,
    fontSize: 14,
    borderRadius: 4,
    backgroundColor: '#0000000e'
  }
})
