import { Text } from '../Text';
import { Container } from './style';

interface ButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
}

export function Button({ children, onPress, disabled }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text weight="600" color="#ffff">
        {children}
      </Text>
    </Container>
  );
}
