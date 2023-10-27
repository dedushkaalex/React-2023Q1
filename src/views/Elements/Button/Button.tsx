import { Component, HTMLAttributes } from 'react';
import styles from './Button.module.css';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

class Button extends Component<Props, Record<string, never>> {
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
        {this.props.title}
      </button>
    );
  }
}

export default Button;
