import { Component, HTMLAttributes } from 'react';
import styles from './Input.module.css';

interface Props extends Omit<HTMLAttributes<HTMLInputElement>, 'placeholder'> {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

interface State {}

class Input extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <label className={styles.field}>
        <input
          type="text"
          id="search"
          className={styles.input__field}
          autoComplete="off"
          {...this.props}
          placeholder=""
          onChange={this.props.onChange}
          value={this.props.value}
        />
        <span className={styles.label}>{this.props.placeholder || ''}</span>
      </label>
    );
  }
}

export default Input;
