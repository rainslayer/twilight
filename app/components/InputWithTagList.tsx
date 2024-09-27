import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Flex,
  Badge,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

interface ComponentProps {
  title?: string;
  placeholder?: string;
  tags: Array<string> | undefined | null;
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
  validator?: (tag: string) => ValidatorReturnType;
}

export function InputWithTagList({
  title,
  placeholder: inputPlaceholder,
  tags,
  addTag,
  removeTag,
  validator,
}: ComponentProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleChangeValue(tag: string) {
    setValue(tag);

    if (validator && tag.length) {
      const { valid, message } = validator(tag);

      if (!valid) {
        return setError(message);
      } else {
        setError(null);
      }
    } else {
      setError(null);
    }
  }

  return (
    <Flex gap={2} direction="column">
      <FormControl isInvalid={!!error}>
        <FormLabel>{title}</FormLabel>
        <InputGroup size="md">
          <Input
            value={value}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChangeValue(event.target.value)
            }
            placeholder={inputPlaceholder}
          />
          <InputRightElement
            width="auto"
            mr={1}
            onClick={() => {
              if (!error && value.length) {
                addTag(value);
                setValue("");
              }
            }}
          >
            <Button size="sm">Add to list</Button>
          </InputRightElement>
        </InputGroup>
        {<FormErrorMessage color="red">{error}</FormErrorMessage>}
      </FormControl>
      <Flex gap={2} flexWrap="wrap">
        {tags?.map((tag) => (
          <Badge key={tag} variant="subtle" colorScheme="green">
            {tag}
            <Button ml={1} size="xs" onClick={() => removeTag(tag)}>
              X
            </Button>
          </Badge>
        ))}
      </Flex>
    </Flex>
  );
}
