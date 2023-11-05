import { Form } from '@views/Components/Form';
import { Button } from '@views/Elements/Button';
import { Input } from '@views/Elements/Input';

interface SearchFormPokemonProps {
  onSearch: () => void;
  isLoading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const SearchFormPokemon = ({
  onSearch,
  isLoading,
  onChange,
  value,
}: SearchFormPokemonProps) => {
  return (
    <Form
      handleSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <Input
        placeholder={'Search'}
        onChange={onChange}
        value={value}
        autoFocus
      />
      <Button
        type={'submit'}
        loading={isLoading}
      >
        Get Pokemons
      </Button>
    </Form>
  );
};
