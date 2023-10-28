import { Component, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './Button.module.css';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  disabled?: boolean;
}

class Button extends Component<PropsWithChildren<Props>, Record<string, never>> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps: Pick<Props, 'type' | 'loading' | 'disabled'> = {
    type: 'button',
    loading: false,
    disabled: false,
  };

  render() {
    const { loading, children, type, onClick, disabled } = this.props;

    return (
      <button
        type={type}
        className={styles.button}
        onClick={onClick}
        disabled={disabled || loading}
      >
        {loading && <div className={`${styles.loading}`} />}
        {children}
      </button>
    );
  }
}

export default Button;
