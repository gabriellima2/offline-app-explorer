import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, type TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean
}

export function Button(props: ButtonProps) {
  const { style, children, isLoading, disabled, ...rest } = props
  const isDisabled = isLoading || disabled
  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[styles.button, style]}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.label}>{children}</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 14,
    borderRadius: 4,
    backgroundColor: '#000000',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: '#ffffff'
  },
})
