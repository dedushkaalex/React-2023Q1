import { Component, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './Button.module.css';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

class Button extends Component<PropsWithChildren<Props>, Record<string, never>> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps: Pick<Props, 'type'> = {
    type: 'button',
  };

  render() {
    return (
      <button
        type={this.props.type}
        className={styles.button}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
