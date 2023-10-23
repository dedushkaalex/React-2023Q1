import { Component, HTMLAttributes } from 'react';
import styles from './Button.module.css';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface State {}

class Button extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <button type="button" className={styles.button} onClick={this.props.onClick}>
        {this.props.title}
      </button>
    );
  }
}

export default Button;
