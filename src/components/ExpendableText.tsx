import { Button, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

interface Props {
  children: string;
}
const ExpendableText = ({ children }: Props) => {
  const [expandable, setExpendable] = useState(false);
  const limit = 300;

  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expandable ? children : children.substring(0, limit) + "...";

  return (
    <>
      <Text>
        {summary}
        <Button
          size={"sm"}
          fontWeight="bold"
          colorScheme={"yellow"}
          onClick={() => setExpendable(!expandable)}
        >
          {expandable ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpendableText;
