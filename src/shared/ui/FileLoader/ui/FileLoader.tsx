import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import styles from './FileLoader.module.css';
import Attach from './img/attach.png';

interface FileLoaderProps {
  fieldName: string;
}

export const FileLoader: FC<FileLoaderProps> = ({ fieldName }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <label className={styles.input}>
        <img
          src={Attach}
          width={30}
          height={30}
          alt=''
        />
        <input
          type='file'
          style={{ display: 'none' }}
          id='file'
          {...register(fieldName)}
        />
        <span>Upload file</span>
      </label>
      {Object.keys(errors).length > 0 && fieldName && (
        <p className={styles.error__notify}>{errors[fieldName]?.message as string}</p>
      )}
    </div>
  );
};
