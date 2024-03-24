import { Loader2 } from "lucide-react";

type Props = {
  loadingText?: string;
};

const ButtonLoader = ({ loadingText = "Очікуйте..." }: Props) => {
  return (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      {loadingText}
    </>
  );
};

export default ButtonLoader;
